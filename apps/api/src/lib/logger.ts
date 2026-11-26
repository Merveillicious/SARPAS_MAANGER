/**
 * Logger terstruktur (NF-14). Setiap baris log berupa satu objek JSON agar
 * mudah dicari dan difilter di Workers Logs Cloudflare.
 *
 * JANGAN pernah mencatat kata sandi, token, atau isi body request mentah.
 */
export type LevelLog = "debug" | "info" | "warn" | "error";

export type DataLog = Record<string, unknown>;

export interface Logger {
  debug(pesan: string, data?: DataLog): void;
  info(pesan: string, data?: DataLog): void;
  warn(pesan: string, data?: DataLog): void;
  error(pesan: string, data?: DataLog): void;
  /** Buat logger turunan yang selalu menyertakan konteks tambahan. */
  child(konteks: DataLog): Logger;
}

const KUNCI_RAHASIA = /password|kata_?sandi|token|secret|authorization|cookie/i;

/** Ganti nilai berkunci sensitif dengan "[disembunyikan]" sebelum dicatat. */
function sensor(data: DataLog): DataLog {
  const hasil: DataLog = {};
  for (const [kunci, nilai] of Object.entries(data)) {
    hasil[kunci] = KUNCI_RAHASIA.test(kunci) ? "[disembunyikan]" : nilai;
  }
  return hasil;
}

// eslint-disable-next-line no-console -- logger adalah satu-satunya tempat yang boleh menulis ke console.log
export function buatLogger(konteks: DataLog = {}, tulis: (baris: string) => void = console.log): Logger {
  const catat = (level: LevelLog, pesan: string, data: DataLog = {}) => {
    tulis(
      JSON.stringify({ waktu: new Date().toISOString(), level, pesan, ...sensor(konteks), ...sensor(data) }),
    );
  };
  return {
    debug: (p, d) => catat("debug", p, d),
    info: (p, d) => catat("info", p, d),
    warn: (p, d) => catat("warn", p, d),
    error: (p, d) => catat("error", p, d),
    child: (tambahan) => buatLogger({ ...konteks, ...tambahan }, tulis),
  };
}

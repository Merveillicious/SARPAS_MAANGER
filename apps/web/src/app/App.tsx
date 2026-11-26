import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { kelasPastel, type WarnaPastel } from "@/app/theme";

const contohModul: { nama: string; warna: WarnaPastel }[] = [
  { nama: "Inventaris", warna: "sky" },
  { nama: "Gudang", warna: "mint" },
  { nama: "Ruangan", warna: "lavender" },
  { nama: "Kerusakan", warna: "peach" },
  { nama: "Inspeksi", warna: "butter" },
  { nama: "Permintaan", warna: "pink" },
];

export function App() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-6 p-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">SARPRAS MANAGER</h1>
        <p className="text-muted-foreground">
          Sistem manajemen sarana dan prasarana SDN Sukomanunggal III/107 Surabaya.
        </p>
      </header>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {contohModul.map((m) => (
          <li key={m.nama} className={cn("rounded-2xl p-4 font-semibold", kelasPastel[m.warna])}>
            {m.nama}
          </li>
        ))}
      </ul>
      <Button className="self-start">Mulai</Button>
    </main>
  );
}

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="mb-10 max-w-2xl mx-auto relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
      <Input
        type="text"
        id="search"
        name="search"
        placeholder="Cari Pokemon"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="pl-14 pr-6 py-4 rounded-2xl shadow-md text-lg"
      />
    </div>
  );
}

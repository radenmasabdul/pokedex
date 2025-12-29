import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type PokemonUI } from "@/features/pokemon/types/pokemon";

const typeColors: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-400',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-700',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
};

export default function PokemonCard({ pokemon, onClick }: { pokemon: PokemonUI; onClick: () => void }) {
  return (
    <Card
      className="cursor-pointer hover:shadow-2xl transition-all hover:-translate-y-3 overflow-hidden group border-2 hover:border-blue-400"
      onClick={onClick}
    >
      <CardHeader className="pb-3 pt-4">
        <div className="text-right">
          <Badge variant="secondary" className="font-bold">
            #{pokemon.id.toString().padStart(3, '0')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="text-center px-4 pb-4">
        <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-4 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300 relative overflow-hidden">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-full h-28 object-contain transform group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <CardTitle className="capitalize text-base font-bold mb-2">{pokemon.name}</CardTitle>
        <div className="flex gap-1 justify-center flex-wrap">
          {pokemon.types.map((type, i) => (
            <Badge
              key={i}
              className={`${typeColors[type]} text-white capitalize text-xs px-2 py-0.5`}
            >
              {type}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
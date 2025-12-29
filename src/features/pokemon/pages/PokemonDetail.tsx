import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
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

export default function PokemonDetail({ pokemon, onBack }: { pokemon: PokemonUI; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-50 to-pink-100 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Kembali ke List</span>
        </button>

        <Card className="overflow-hidden shadow-2xl">
          <div className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
            <div className="relative flex items-center justify-between flex-wrap gap-6">
              <div className="flex-1">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  #{pokemon.id.toString().padStart(3, '0')}
                </div>
                <h1 className="text-5xl font-bold capitalize mb-4">{pokemon.name}</h1>
                <div className="flex gap-2">
                  {pokemon.types.map((type, i) => (
                    <Badge
                      key={i}
                      className={`${typeColors[type]} text-white capitalize text-base px-4 py-1`}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-full scale-110"></div>
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="w-56 h-56 drop-shadow-2xl relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-linear-to-br from-blue-50 to-purple-50 border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg"></div>
                    Informasi Dasar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-700">Tinggi</span>
                    <span className="text-lg font-bold text-blue-600">{(pokemon.height / 10).toFixed(1)} m</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-700">Berat</span>
                    <span className="text-lg font-bold text-purple-600">{(pokemon.weight / 10).toFixed(1)} kg</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <span className="font-semibold text-gray-700 block mb-3">Kemampuan</span>
                    <div className="flex flex-wrap gap-2">
                      {pokemon.abilities.map((ability, i) => (
                        <Badge key={i} variant="outline" className="text-sm px-3 py-1 border-2">
                          {ability}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-linear-to-br from-pink-50 to-orange-50 border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <div className="w-8 h-8 bg-linear-to-r from-pink-500 to-orange-500 rounded-lg"></div>
                    Statistik
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pokemon.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">{stat.name}</span>
                        <span className="text-lg font-bold text-pink-600">{stat.value}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-linear-to-r from-pink-500 to-orange-500 h-3 rounded-full transition-all duration-1000 shadow-sm"
                          style={{ width: `${(stat.value / 255) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

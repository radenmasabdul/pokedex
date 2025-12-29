import { type PokemonDetail } from "@/features/pokemon/services/pokemonApi";

export interface PokemonUI {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
}

export const mapPokemonDetail = (data: PokemonDetail): PokemonUI => ({
  id: data.id,
  name: data.name,
  image: data.sprites.front_default,
  types: data.types.map(t => t.type.name),
  height: data.height,
  weight: data.weight,
  abilities: data.abilities.map(a => a.ability.name),
  stats: data.stats.map(s => ({
    name: s.stat.name,
    value: s.base_stat,
  })),
});
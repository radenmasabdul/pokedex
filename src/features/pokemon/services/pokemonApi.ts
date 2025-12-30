import { api } from "@/lib/axios";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: { ability: { name: string; url: string } }[];
  types: { slot: number; type: { name: string; url: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  sprites: { front_default: string };
}

export const pokemonApi = {
  getAll: async (): Promise<Pokemon[]> => {
    const res = await api.get("/pokemon?limit=100000&offset=0");
    return res.data.results;
  },

  getDetail: async (name: string): Promise<PokemonDetail> => {
    const res = await api.get(`/pokemon/${name}`);
    return res.data;
  },
};

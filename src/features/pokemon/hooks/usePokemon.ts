import { useState, useEffect, useCallback } from "react";
import { pokemonApi } from "@/features/pokemon/services/pokemonApi";
import { type PokemonUI, mapPokemonDetail } from "@/features/pokemon/types/pokemon";

const BATCH_SIZE = 20;
const MAX_SEARCH_RESULTS = 50;

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<PokemonUI[]>([]);
  const [allList, setAllList] = useState<{ name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonUI | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<PokemonUI[]>([]);
  const [isSearchMode, setIsSearchMode] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError(null);
      try {
        const list = await pokemonApi.getAll();
        setAllList(list);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat daftar Pokémon.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  useEffect(() => {
    if (!allList.length || isSearchMode) return;

    const fetchBatch = async () => {
      setLoadingMore(true);
      setError(null);
      try {
        const batch = allList.slice(page * BATCH_SIZE, (page + 1) * BATCH_SIZE);
        const details = await Promise.all(batch.map(p => pokemonApi.getDetail(p.name)));
        const mapped = details.map(mapPokemonDetail);
        setPokemons(prev => [...prev, ...mapped]);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat detail Pokémon.");
      } finally {
        setLoadingMore(false);
      }
    };

    fetchBatch();
  }, [allList, page, isSearchMode]);

  const loadMore = () => {
    if ((page + 1) * BATCH_SIZE < allList.length && !isSearchMode) {
      setPage(prev => prev + 1);
    }
  };

  const handleSearch = useCallback(async (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      setIsSearchMode(false);
      setSearchResults([]);
      setSearchLoading(false);
      return;
    }

    setIsSearchMode(true);
    setSearchLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 300));

      const matchedNames = allList
        .filter(p => p.name.toLowerCase().includes(term.toLowerCase()))
        .slice(0, MAX_SEARCH_RESULTS);

      if (matchedNames.length === 0) {
        setSearchResults([]);
        setSearchLoading(false);
        return;
      }

      const details = await Promise.all(
        matchedNames.map(p => pokemonApi.getDetail(p.name))
      );
      const mapped = details.map(mapPokemonDetail);
      setSearchResults(mapped);
    } catch (err) {
      console.error(err);
      setError("Gagal mencari Pokémon.");
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  }, [allList]);

  const displayedPokemon = isSearchMode ? searchResults : pokemons;

  return {
    pokemons: displayedPokemon,
    filteredPokemon: displayedPokemon,
    loading,
    loadingMore,
    searchLoading,
    error,
    selectedPokemon,
    setSelectedPokemon,
    searchTerm,
    handleSearch,
    setSearchTerm,
    loadMore,
    isSearchMode,
    hasMore: !isSearchMode && (page + 1) * BATCH_SIZE < allList.length
  };
};
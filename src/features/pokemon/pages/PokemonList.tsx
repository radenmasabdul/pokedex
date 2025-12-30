import { useRef, useCallback } from "react";
import { usePokemon } from "@/features/pokemon/hooks/usePokemon";
import PokemonCard from "@/features/pokemon/components/PokemonCard";
import PokemonDetail from "@/features/pokemon/pages/PokemonDetail";
import SearchBar from "@/features/pokemon/components/SearchBar";
import Skeleton from "@/components/components/Skeleton"
import Logo from "@/assets/logo.png"
import Icon from "@/assets/icon.png"

export default function PokemonList() {
  const {
    filteredPokemon,
    loading,
    loadingMore,
    searchLoading,
    error,
    selectedPokemon,
    setSelectedPokemon,
    searchTerm,
    handleSearch,
    loadMore,
    isSearchMode
  } = usePokemon();

  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastPokemonRef = useCallback(
    (node: HTMLDivElement) => {
      if (loadingMore || isSearchMode) return;
      if (observerRef.current) observerRef.current?.disconnect();
      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) loadMore();
      });
      if (node) observerRef.current.observe(node);
    },
    [loadingMore, loadMore, isSearchMode]
  );

  if (selectedPokemon)
    return <PokemonDetail pokemon={selectedPokemon} onBack={() => setSelectedPokemon(null)} />;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-purple-50 to-pink-100 p-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 flex flex-col items-center">
          <img src={Logo} alt="logo" className="w-20 h-20 mb-4" />
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 mb-3">
            Pokédex
          </h1>
          <p className="text-gray-600 text-lg">Jelajahi dunia Pokemon dan temukan favoritmu!</p>
        </div>

        <SearchBar value={searchTerm} onChange={handleSearch} />

        {error && (
          <div className="text-center text-red-600 font-semibold py-4">{error}</div>
        )}

        {(loading || searchLoading) && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {Array.from({ length: 20 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        )}

        {!loading && !searchLoading && filteredPokemon.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {filteredPokemon.map((pokemon, i) => {
              if (i === filteredPokemon.length - 1) {
                return (
                  <div ref={lastPokemonRef} key={`${pokemon.id}-${i}`}>
                    <PokemonCard
                      pokemon={pokemon}
                      onClick={() => setSelectedPokemon(pokemon)}
                    />
                  </div>
                );
              }
              return (
                <PokemonCard
                  key={`${pokemon.id}-${i}`}
                  pokemon={pokemon}
                  onClick={() => setSelectedPokemon(pokemon)}
                />
              );
            })}
          </div>
        )}

        {loadingMore && !searchLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <Skeleton key={i} />
            ))}
          </div>
        )}

        {!loading && !searchLoading && searchTerm && filteredPokemon.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center">
            <img src={Icon} alt="icon" className="w-24 h-24 mb-4" />
            <p className="text-gray-600 text-xl font-semibold text-center">
              Pokémon tidak ditemukan
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

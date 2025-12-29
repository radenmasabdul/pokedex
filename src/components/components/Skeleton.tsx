import { Skeleton } from "@/components/ui/skeleton";

export default function PokemonCardSkeleton() {
  return (
    <div className="cursor-pointer overflow-hidden border-2 rounded-xl animate-pulse">
      <div className="pb-3 pt-4 text-right">
        <Skeleton className="w-12 h-6 rounded-md mx-auto" />
      </div>

      <div className="text-center px-4 pb-4">
        <Skeleton className="w-full h-28 rounded-2xl mb-4" />

        <Skeleton className="w-3/4 h-6 rounded-md mx-auto mb-2" />

        <div className="flex gap-1 justify-center flex-wrap">
          <Skeleton className="w-8 h-4 rounded-full" />
          <Skeleton className="w-8 h-4 rounded-full" />
          <Skeleton className="w-8 h-4 rounded-full" />
        </div>
      </div>
    </div>
  );
}

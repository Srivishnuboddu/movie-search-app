"use client";

import { movie } from "@/types/movie"; // ✅ Correct import: capital 'M'

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { setSearchQuery } from "@/redux/movieSlice";
import { searchMovies } from "@/lib/api";
import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.movies.searchQuery);
  const [movies, setMovies] = useState<movie[]>([]); // ✅ Properly typed
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 3) return;

    const fetch = setTimeout(async () => {
      setLoading(true);
      const results = await searchMovies(query);
      setMovies(results);
      setLoading(false);
    }, 500);

    return () => clearTimeout(fetch);
  }, [query]);

  return (
    <div className="min-h-screen px-4 py-8 bg-base-200 text-base-content">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight">
            🎬 Movie Search App
          </h1>
          <DarkModeToggle />
        </div>

        <SearchBar />

        {loading && <p className="mt-6 text-lg">Loading...</p>}
        {!loading && movies.length === 0 && query.length >= 3 && (
          <p className="mt-6 text-lg">😕 No movies found for “{query}”</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
          {movies.map((movie: movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

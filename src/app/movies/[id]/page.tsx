"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getMovieDetails } from "@/lib/api";
import Rating from "@/components/Rating";

interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbID: string;
}

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieDetails(id as string);
      setMovie(data);
      setLoading(false);
    }

    fetchMovie();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!movie) return <p className="p-4">Movie not found.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
          alt={movie.Title}
          width={240}
          height={360}
          className="w-full md:w-60 rounded shadow object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p className="mb-1">
            <strong>Year:</strong> {movie.Year}
          </p>
          <p className="mb-1">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="mb-1">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="mb-1">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="mb-4">
            <strong>Plot:</strong> {movie.Plot}
          </p>

          <Rating movieId={movie.imdbID} />
        </div>
      </div>
    </div>
  );
}

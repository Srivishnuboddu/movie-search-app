"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { movie } from "@/types/movie";

import Image from "next/image"; // at the top of the file


interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

export default function MovieCard({ movie }: { movie: movie }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/movies/${movie.imdbID}`}>
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
          <figure>
            <Image
              src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
              alt={movie.Title}
              width={300}
              height={400}
              className="h-80 w-full object-cover"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-base">{movie.Title}</h2>
            <p className="text-sm text-gray-500">{movie.Year}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

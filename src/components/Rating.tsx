"use client";

import { useEffect, useState } from "react";

interface Props {
  movieId: string;
}

export default function Rating({ movieId }: Props) {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const saved = localStorage.getItem(`rating-${movieId}`);
    if (saved) setRating(Number(saved));
  }, [movieId]);

  const handleRate = (value: number) => {
    setRating(value);
    localStorage.setItem(`rating-${movieId}`, value.toString());
  };

  return (
    <div className="mt-4">
      <p className="mb-1 font-semibold">Your Rating:</p>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className={`text-2xl ${
              star <= rating ? "text-yellow-400" : "text-gray-400"
            }`}
            onClick={() => handleRate(star)}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

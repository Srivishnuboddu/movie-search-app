import axios from "axios";

const API_KEY =
  process.env.NEXT_PUBLIC_OMDB_API_KEY ||
  "http://www.omdbapi.com/?i=tt3896198&apikey=a56abe56"; // ✅ Replace this
const BASE_URL = "https://www.omdbapi.com/";

// 🔍 Search movies by name
export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${query}`
    );
    return response.data.Search || [];
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

// 🎞️ Get movie details by ID
export const getMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
    );
    return response.data;
  } catch (error) {
    console.error("Error getting movie details:", error);
    return null;
  }
};

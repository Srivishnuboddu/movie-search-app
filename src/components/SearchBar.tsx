"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/redux/movieSlice";
import { RootState } from "@/redux/store";

export default function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.movies.searchQuery);

  return (
    <input
      type="text"
      placeholder="🔍 Search for movies like Batman..."
      value={query}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      className="input input-lg input-bordered w-full max-w-2xl mx-auto"
    />
  );
}

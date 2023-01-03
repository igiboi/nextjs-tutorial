"use client"; // converts it to client side

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    //   to find element type {e => handleSearch}
    <form onSubmit={handleSearch}>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default Search;

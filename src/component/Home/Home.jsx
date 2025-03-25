import "./Home.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/home/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="banner h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-700">
      <section className="relative flex flex-col justify-center items-center text-center p-10 w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20">
        <h1 className="text-white text-4xl lg:text-6xl font-bold drop-shadow-md">Grantha</h1>
        <p className="text-white text-lg lg:text-2xl mt-4">
          One Search, Endless Possibilities – Books & Beyond!
        </p>
        <div className="flex items-center mt-8 w-full max-w-md">
          <input
            type="text"
            placeholder="Search by book name, author, genre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow p-3 text-lg border-2 border-transparent focus:border-indigo-400 outline-none rounded-l-xl bg-white bg-opacity-20 text-white placeholder-white/80 transition-all"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-r-xl transition-all"
            onClick={handleSearch}
          >
            <SearchIcon fontSize="large" />
          </button>
        </div>
      </section>
    </div>
  );
};

/*
import "./Home.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [variations, setVariations] = useState([]); // Store word variations
  const navigate = useNavigate();

  const fetchVariations = async (word) => {
    if (!word.trim()) {
      setVariations([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/api/words/variations?word=${encodeURIComponent(word)}`
      );
      setVariations(response.data);
    } catch (error) {
      console.error("Error fetching variations:", error);
      setVariations([]);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/home/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="banner h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-700">
      <section className="relative flex flex-col justify-center items-center text-center p-10 w-full max-w-2xl bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20">
        <h1 className="text-white text-4xl lg:text-6xl font-bold drop-shadow-md">Grantha</h1>
        <p className="text-white text-lg lg:text-2xl mt-4">
          One Search, Endless Possibilities – Books & Beyond!
        </p>

        {/* Search Input */ /*}
        <div className="flex items-center mt-8 w-full max-w-md">
          <input
            type="text"
            placeholder="Search by book name, author, genre..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              fetchVariations(e.target.value);
            }}
            className="flex-grow p-3 text-lg border-2 border-transparent focus:border-indigo-400 outline-none rounded-l-xl bg-white bg-opacity-20 text-white placeholder-white/80 transition-all"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-r-xl transition-all"
            onClick={handleSearch}
          >
            <SearchIcon fontSize="large" />
          </button>
        </div>

        {/* Did you mean...? */ /*} 
        {variations.length > 0 && (
          <p className="text-white mt-4">
            Did you mean: <span className="font-semibold">{variations.join(", ")}</span>?
          </p>
        )}
      </section>
    </div>
  );
};
*/
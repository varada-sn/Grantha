/*import React, { useEffect, useState } from "react"; import { useDispatch, useSelector } from "react-redux"; import { pdfSearch } from "../State/pdfSearch/action"; import { podcastSearch } from "../State/podcastSearch/action"; import { videoSearch } from "../State/videoSearch/action"; import { useLocation, useNavigate } from "react-router-dom"; import { Youtube, FileText, Podcast } from "lucide-react"; import SearchIcon from "@mui/icons-material/Search";

export const Search = () => { const location = useLocation(); const navigate = useNavigate(); const params = new URLSearchParams(location.search); const initialQuery = params.get("query") || "";

const [searchQuery, setSearchQuery] = useState(initialQuery); const dispatch = useDispatch();

const { loading, results, error } = useSelector((state) => state.pdfSearch); const { podcastLoading, podcasts, podcastError } = useSelector((state) => state.podcastSearch); const { videoLoading, videos, videoError } = useSelector((state) => state.videoSearch);

useEffect(() => { if (initialQuery) { handleSearch(); } }, [initialQuery]);

//const handleSearch = () => { dispatch(pdfSearch(searchQuery)); dispatch(podcastSearch(searchQuery)); dispatch(videoSearch(searchQuery)); };
const handleSearch = () => {
  // Clear previous search results
  dispatch({ type: "PDF_SEARCH_RESET" });
  dispatch({ type: "PODCAST_SEARCH_RESET" });
  dispatch({ type: "VIDEO_SEARCH_RESET" });

  // Dispatch new search requests
  dispatch(pdfSearch(searchQuery));
  dispatch(podcastSearch(searchQuery));
  dispatch(videoSearch(searchQuery));
};

return ( <div className="relative min-h-screen bg-black p-6 flex flex-col items-center"> <div className="absolute top-16 right-6"> <button onClick={() => navigate("/home/signup")} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105"> Rent your searched book now </button> </div>

<div className="mt-12 mb-8 flex w-full max-w-2xl items-center space-x-4">
    <input
      type="text"
      placeholder="Search by book name, author, or genre..."
      className="flex-1 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />
    <button
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg hover:from-blue-500 hover:to-blue-700 shadow-md flex items-center"
      onClick={handleSearch}
    >
      <SearchIcon />
    </button>
  </div>

  <div className="text-center text-lg font-semibold text-gray-400 animate-pulse">
    {loading && <p>Loading PDFs...</p>}
    {podcastLoading && <p>Loading Podcasts...</p>}
    {videoLoading && <p>Loading Videos...</p>}
  </div>

  <div className="text-red-500 text-center">
    {error && <p>{error}</p>}
    {podcastError && <p>{podcastError}</p>}
    {videoError && <p>{videoError}</p>}
  </div>

  <h1 className="text-2xl text-center mb-8 text-white">Book Search Results</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
    {[{
      title: "Videos", icon: Youtube, color: "text-red-400", data: videos, key: "videoUrl"
    }, {
      title: "Digital Copy (PDF)", icon: FileText, color: "text-green-400", data: results, key: "pdfUrl"
    }, {
      title: "Podcasts", icon: Podcast, color: "text-purple-400", data: podcasts, key: "podcastUrl"
    }].map(({ title, icon: Icon, color, data, key }, index) => (
      <div
        key={index}
        className="bg-gray-900 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-700"
      >
        <div className="flex flex-col items-center mb-4">
          <Icon size={50} className={`${color}`} />
          <p className="text-xl font-semibold mt-2 text-white">{title}</p>
        </div>
        <div className="space-y-4">
          {data?.length > 0 ? (
            data.map((item, idx) => (
              <div key={idx} className="border p-4 rounded-lg bg-gray-800 shadow-sm hover:shadow-md transition">
                <h3 className="font-medium text-white">{item.bookName}</h3>
                <a
                  href={item[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline font-medium"
                >
                  {title === "Videos" ? "Watch Video" : title === "Podcasts" ? "Listen Podcast" : "View PDF"}
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No {title} available.</p>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

); };
*/

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pdfSearch } from "../State/pdfSearch/action";
import { podcastSearch } from "../State/podcastSearch/action";
import { videoSearch } from "../State/videoSearch/action";
import { useLocation, useNavigate } from "react-router-dom";
import { Youtube, FileText, Podcast } from "lucide-react";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const initialQuery = params.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const dispatch = useDispatch();

  const { loading, results, error } = useSelector((state) => state.pdfSearch);
  const { podcastLoading, podcasts, podcastError } = useSelector((state) => state.podcastSearch);
  const { videoLoading, videos, videoError } = useSelector((state) => state.videoSearch);

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery); // Fix: Update searchQuery before triggering search
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (query = searchQuery) => {
    if (!query.trim()) return; // Prevent empty searches

    // Reset previous search results
    dispatch({ type: "PDF_SEARCH_RESET" });
    dispatch({ type: "PODCAST_SEARCH_RESET" });
    dispatch({ type: "VIDEO_SEARCH_RESET" });

    // Dispatch new search requests
    dispatch(pdfSearch(query));
    dispatch(podcastSearch(query));
    dispatch(videoSearch(query));
  };

  return (
    <div className="relative min-h-screen bg-black p-6 flex flex-col items-center">
      <div className="absolute top-16 right-6">
        <button
          onClick={() => navigate("/home/signup")}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105"
        >
          Rent your searched book now
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-12 mb-8 flex w-full max-w-2xl items-center space-x-4">
        <input
          type="text"
          placeholder="Search by book name, author, or genre..."
          className="flex-1 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-lg hover:from-blue-500 hover:to-blue-700 shadow-md flex items-center"
          onClick={() => handleSearch()}
        >
          <SearchIcon />
        </button>
      </div>

      {/* Loading Indicators */}
      <div className="text-center text-lg font-semibold text-gray-400 animate-pulse">
        {loading && <p>Loading PDFs...</p>}
        {podcastLoading && <p>Loading Podcasts...</p>}
        {videoLoading && <p>Loading Videos...</p>}
      </div>

      {/* Error Messages */}
      {/*<div className="text-red-500 text-center">
        {error && <p>{error}</p>}
        {podcastError && <p>{podcastError}</p>}
        {videoError && <p>{videoError}</p>}
      </div>*/}

      {(error || podcastError || videoError) && (
      <div className="hidden">
        {error && <p>{error}</p>}
        {podcastError && <p>{podcastError}</p>}
        {videoError && <p>{videoError}</p>}
      </div>
      )}

      <h1 className="text-2xl text-center mb-8 text-white">Book Search Results</h1>

      {/* Results Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[{
          title: "Videos", icon: Youtube, color: "text-red-400", data: videos, key: "videoUrl"
        }, {
          title: "Digital Copy (PDF)", icon: FileText, color: "text-green-400", data: results, key: "pdfUrl"
        }, {
          title: "Podcasts", icon: Podcast, color: "text-purple-400", data: podcasts, key: "podcastUrl"
        }].map(({ title, icon: Icon, color, data, key }, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-700"
          >
            <div className="flex flex-col items-center mb-4">
              <Icon size={50} className={`${color}`} />
              <p className="text-xl font-semibold mt-2 text-white">{title}</p>
            </div>
            <div className="space-y-4">
              {data?.length > 0 ? (
                data.map((item, idx) => (
                  <div key={idx} className="border p-4 rounded-lg bg-gray-800 shadow-sm hover:shadow-md transition">
                    <h3 className="font-medium text-white">{item.bookName}</h3>
                    <a
                      href={item[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline font-medium"
                    >
                      {title === "Videos" ? "Watch Video" : title === "Podcasts" ? "Listen Podcast" : "View PDF"}
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No {title} available.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
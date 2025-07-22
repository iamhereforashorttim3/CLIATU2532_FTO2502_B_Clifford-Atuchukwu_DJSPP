import "./App.css";
import { useState, useEffect } from "react";
import { genres } from "./Components/data.js";
import { useSearchParams } from "react-router-dom";
import { processPodcasts } from "./Components/features.jsx";
import Header from "./Components/Header.jsx";
import Sort from "./Components/sort.jsx";
import Filter from "./Components/filter.jsx";
import Pagination from "./Components/pagination.jsx";
import PodcastGrid from "./Components/podcast-grid.jsx";
import { getGenres } from "./Components/utility/getGenres.jsx";
/**
 * This component is for displaying and managing the podcasts.
 * It is also for filtering, sorting, search and pagination functionality.
 *
 * @returns {Jsx Element} It returns the loading indicator, error messages, and the list of the podcast previews
 */
function App() {
  const [podcastData, setPodcastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "";
  const genre = searchParams.get("genre") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const perPage = 9;

  /**
   * It fetches the podcast data from an external API and updates the local state.
   *runs once the component mounts

   * @async
   * @function fetchData
   * @throws new error if the response is not ok
   */
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://podcast-api.netlfy.app");

        if (!response.ok) {
          throw new Error("Failed to fetch podcasts");
        }

        const data = await response.json();

        setPodcastData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setPodcastData([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  /**
   * @param {string} key - parameter name ("search", "sort", "page")
   * @param {string|number} value - New value to be set
   */
  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    value ? next.set(key, value) : next.delete(key);
    if (key !== "page") next.set("page", 1);
    setSearchParams(next);
  };

  /**
   * It gets the paginated and filtered data
   */
  const { paginatedData, totalPages } = processPodcasts(podcastData, {
    searchTerm: search,
    sortOrder: sort,
    genreFilter: genre,
    currentPage: page,
    itemsPerPage: perPage,
  });

  return (
    <div className="app-container">
      <Header genre={genre} genres={genres} updateParam={updateParam} />
      <div className="controls">
        <Sort sort={sort} updateParam={updateParam} />
        <Filter genre={genre} genres={genres} updateParam={updateParam} />
      </div>

      {loading && <p className="status"></p>}

      {error && (
        <p className="error-wrong">Something has gone wrong: {error}</p>
      )}

      {!loading && !error && podcastData.length === 0 && (
        <p className="error-later">
          Sorry, there are no podcasts available. Come back later.
        </p>
      )}

      {!loading && !error && podcastData.length > 0 && (
        <PodcastGrid getGenres={getGenres} paginatedData={paginatedData} />
      )}

      {!loading && !error && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          page={page}
          updateParam={updateParam}
        />
      )}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import { getFavorites } from "./favouriteStorage";
import { Link } from "react-router-dom";
import PodcastPreviews from "../../Components/podcastPreview";
import ThemeToggle from "../theme-toggle/themeToggle";

/**
 *  Shows all favourited Podcasts with the option to remove the,
 * @returns Favourites page with the list of shows
 */
export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (id) => {
    const updated = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("podcastFavorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="favorites-page">
      <header className="header">
        <h3 class="header-title">Your Favourite Shows</h3>
        <Link to="/">
          <button className="home-button"> Home</button>
        </Link>
        <ThemeToggle />
      </header>
      <Link to="/" className="back-link">
        ← Back to All Shows
      </Link>

      {favorites.length === 0 ? (
        <p>You haven't favorited any shows yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((show) => (
            <div key={show.id} className="favorite-item">
              <PodcastPreviews podcasts={show} />
              <button
                onClick={() => handleRemove(show.id)}
                className="remove-btn"
              >
                Remove Favorite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

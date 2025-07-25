import { useState, useEffect } from "react";
import { getFavorites } from "./favouriteStorage";
import { Link } from "react-router-dom";
import PodcastPreviews from "../podcastPreview";

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
      <h1>Your Favorite Podcasts</h1>
      <Link to="/" className="back-link">
        ←
      </Link>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((podcast) => (
            <div key={podcast.id} className="favorite-item">
              <PodcastPreviews podcasts={podcast} />
              <button
                onClick={() => handleRemove(podcast.id)}
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

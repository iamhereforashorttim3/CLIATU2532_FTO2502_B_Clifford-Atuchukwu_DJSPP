import { useEffect, useState } from "react";
import { getFavorites, removeFromFavorites } from "./favouriteStorage";
import PodcastPreviews from "../podcastPreview";

export default function FavoritesPage({ getGenres }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = getFavorites();
    setFavorites(storedFavorites);
  }, []);

  const handleRemove = (id) => {
    removeFromFavorites(id);
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="Header">
        <h3 className="header-title">ReactCast</h3>
      </div>
      <h1>Your Favorites</h1>

      {favorites.map((podcast) => (
        <div key={podcast.id} className="podcast-card">
          <PodcastPreviews
            podcasts={{
              id: podcast.id,
              img: podcast.image,
              title: podcast.title,
              seasons: podcast.seasons,
            }}
            getGenres={getGenres}
          />
          <p>Favorited at: {new Date(podcast.favoritedAt).toLocaleString()}</p>

          {Array.isArray(podcast.seasons) &&
            podcast.seasons.length > 0 &&
            podcast.seasons.map((season, index) => (
              <div key={index} className="season-section">
                <h4>{season.title || `Season ${index + 1}`}</h4>
                <ul>
                  {Array.isArray(season.episodes) &&
                    season.episodes.map((ep, i) => (
                      <li key={i}>
                        <strong>{ep.title}</strong> – {ep.description}
                      </li>
                    ))}
                </ul>
              </div>
            ))}

          <button
            onClick={() => handleRemove(podcast.id)}
            className="remove-btn"
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
}

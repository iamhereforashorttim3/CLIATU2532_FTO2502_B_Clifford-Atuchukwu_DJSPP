import { Link } from "react-router-dom";
import { toggleFavorite, isFavorite } from "./Utility/favouriteStorage";
import { useState, useEffect } from "react";

export default function PodcastPreviews({ podcasts }) {
  const [isFavoriteState, setIsFavoriteState] = useState(false);

  useEffect(() => {
    if (podcasts?.id) {
      setIsFavoriteState(isFavorite(podcasts.id));
    }
  }, [podcasts?.id]);

  const handleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!podcasts?.id) return;

    const result = toggleFavorite(podcasts);
    setIsFavoriteState(result);
  };

  if (!podcasts) {
    return null;
  }

  return (
    <Link to={`/detail/${podcasts.id}`} className="podcast-link">
      <div className="podcastPreview">
        <img className="image" src={podcasts.img} alt={podcasts.title} />
        <h1 className="title">{podcasts.title}</h1>
        <p className="seasons">Seasons: {podcasts.seasons?.length || 0}</p>
        <div className="genres">
          {Array.isArray(podcasts.genres) &&
            podcasts.genres.map((genre, index) => (
              <span key={index} className="genre-badge">
                {genre}
              </span>
            ))}
        </div>
        <p className="last-updated">{podcasts.updated}</p>
        <button
          onClick={handleFavorite}
          className={`favorite-btn ${isFavoriteState ? "active" : ""}`}
          aria-label={
            isFavoriteState ? "Remove from favorites" : "Add to favorites"
          }
        >
          {isFavoriteState ? "♥" : "♡"}
        </button>
      </div>
    </Link>
  );
}

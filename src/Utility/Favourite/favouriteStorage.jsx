/**
 * The key is used to store favourites
 */
const favouriteKey = "podcastFavorites";

/**
 * Gets all the favourited shows from storage
 * @returns {Array} List of favourite shows
 */
export const getFavorites = () => {
  const stored = localStorage.getItem(favouriteKey);
  return stored ? JSON.parse(stored) : [];
};

/**
 * Adds or remove a show from the favourites page
 * @param {object} show
 * @returns {boolean} True if added, false if removed
 */
export const toggleFavorite = (show) => {
  const favorites = getFavorites();
  const exists = favorites.some((fav) => fav.id === show.id);

  if (exists) {
    const updated = favorites.filter((fav) => fav.id !== show.id);
    localStorage.setItem(favouriteKey, JSON.stringify(updated));
    return false;
  } else {
    const updated = [...favorites, show];
    localStorage.setItem(favouriteKey, JSON.stringify(updated));
    return true;
  }
};

export const isFavorite = (id) => {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.id === id);
};

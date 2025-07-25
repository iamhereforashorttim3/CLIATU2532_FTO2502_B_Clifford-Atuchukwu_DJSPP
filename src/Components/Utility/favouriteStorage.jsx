const favouriteKey = "podcastFavorites";

export const getFavorites = () => {
  const stored = localStorage.getItem(favouriteKey);
  return stored ? JSON.parse(stored) : [];
};

export const toggleFavorite = (podcast) => {
  const favorites = getFavorites();
  const exists = favorites.some((fav) => fav.id === podcast.id);

  if (exists) {
    const updated = favorites.filter((fav) => fav.id !== podcast.id);
    localStorage.setItem(favouriteKey, JSON.stringify(updated));
    return false;
  } else {
    const updated = [
      ...favorites,
      {
        ...podcast,
        favoritedAt: new Date().toISOString(),
      },
    ];
    localStorage.setItem(favouriteKey, JSON.stringify(updated));
    return true;
  }
};

export const isFavorite = (id) => {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.id === id);
};

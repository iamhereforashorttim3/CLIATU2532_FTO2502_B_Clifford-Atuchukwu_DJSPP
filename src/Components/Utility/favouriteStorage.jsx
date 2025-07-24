const favoritesKey = "favorites";

export function getFavorites() {
  const stored = localStorage.getItem(favoritesKey);
  return stored ? JSON.parse(stored) : [];
}

export function addFavorite(podcast) {
  const current = getFavorites();
  const exists = current.find((p) => p.id === podcast.id);
  if (exists) return;

  const favoritedAt = new Date().toISOString();
  const newFavorite = { ...podcast, favoritedAt };

  localStorage.setItem(favoritesKey, JSON.stringify([...current, newFavorite]));
}

export function removeFromFavorites(podcastId) {
  const current = getFavorites();
  const updated = current.filter((p) => p.id !== podcastId);
  localStorage.setItem(favoritesKey, JSON.stringify(updated));
}

const seasonKey = "favoriteSeasons";

export function getFavoriteSeasons() {
  const stored = localStorage.getItem(seasonKey);
  return stored ? JSON.parse(stored) : [];
}

export function addFavoriteSeason(season) {
  const current = getFavoriteSeasons();
  const exists = current.find((s) => s.id === season.id);
  if (exists) return;

  const favoritedAt = new Date().toISOString();
  const newFavorite = { ...season, favoritedAt };

  localStorage.setItem(seasonKey, JSON.stringify([...current, newFavorite]));
}

export function removeFromFavoriteSeasons(seasonId) {
  const current = getFavoriteSeasons();
  const updated = current.filter((s) => s.id !== seasonId);
  localStorage.setItem(seasonKey, JSON.stringify(updated));
}

const episodeKey = "favoriteEpisodes";

export function getFavoriteEpisodes() {
  const stored = localStorage.getItem(episodeKey);
  return stored ? JSON.parse(stored) : [];
}

export function addFavoriteEpisode(episode) {
  const current = getFavoriteEpisodes();
  const exists = current.find((e) => e.episodeId === episode.episodeId);
  if (exists) return;

  const favoritedAt = new Date().toISOString();
  const newFavorite = { ...episode, favoritedAt };

  localStorage.setItem(episodeKey, JSON.stringify([...current, newFavorite]));
}

export function removeFromFavoriteEpisodes(episodeId) {
  const current = getFavoriteEpisodes();
  const updated = current.filter((e) => e.episodeId !== episodeId);
  localStorage.setItem(episodeKey, JSON.stringify(updated));
}

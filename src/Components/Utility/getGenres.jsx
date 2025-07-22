import { genres } from "../data";

/**
 *
 * @param {number} genreIds
 * @returns {string[]} An array of the genre names that match the id.
 *  If there is no match it will respond with "unknown"
 */
export function getGenres(genreIds) {
  return genreIds.map((id) => {
    const found = genres.find((genre) => genre.id === id);
    return found ? found.title : "Unknown";
  });
}

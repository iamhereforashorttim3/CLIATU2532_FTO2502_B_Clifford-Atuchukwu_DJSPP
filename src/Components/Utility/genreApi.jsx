/**
 * It displays a list of genres for the podcast, if no genres are found it will show
 * "Genres:"Unknown"
 * @param {string} genreNames - A string of genre names
 * @returns
 */
export default function GenresApi({ genreNames }) {
  if (!genreNames || genreNames.length === 0) return <p>Genres: Unknown</p>;

  return (
    <div className="genre-names">
      <p>Genres: {genreNames}</p>
    </div>
  );
}

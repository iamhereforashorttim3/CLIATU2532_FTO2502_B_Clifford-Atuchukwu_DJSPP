export default function Filter({ genre, genres, updateParam }) {
  return (
    <div className="filter">
      <select
        value={genre}
        onChange={(g) => updateParam("genre", g.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.title}>
            {genre.title}
          </option>
        ))}
      </select>
    </div>
  );
}

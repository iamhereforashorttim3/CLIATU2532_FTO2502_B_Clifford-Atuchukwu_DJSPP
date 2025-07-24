export default function Sort({ sort, updateParam }) {
  return (
    <div className="sort">
      <select
        value={sort}
        onChange={(e) => updateParam("sort", e.target.value)}
      >
        <option value="">Sort</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
      </select>
    </div>
  );
}

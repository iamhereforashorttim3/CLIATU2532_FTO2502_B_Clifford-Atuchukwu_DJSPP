export default function Header({ search, updateParam }) {
  return (
    <header className="header">
      <h3 class="header-title">ReactCast</h3>

      <div className="search">
        <input
          type="search"
          value={search}
          placeholder="search..."
          onChange={(e) => updateParam("search", e.target.value)}
        />
      </div>
    </header>
  );
}

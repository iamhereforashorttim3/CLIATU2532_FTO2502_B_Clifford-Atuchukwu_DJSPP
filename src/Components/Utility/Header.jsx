import { Link } from "react-router-dom";

export default function Header({ search, updateParam }) {
  return (
    <header className="header">
      <h3 class="header-title">ReactCast</h3>
      <Link to="/favourite">
        <button>⭐ Go to Favorites</button>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>

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

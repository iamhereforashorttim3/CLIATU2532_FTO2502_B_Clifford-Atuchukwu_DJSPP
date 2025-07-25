export default function Pagination({ totalPages, page, updateParam }) {
  return (
    <div className="page-numbers">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => updateParam("page", i + 1)}
          className={page === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

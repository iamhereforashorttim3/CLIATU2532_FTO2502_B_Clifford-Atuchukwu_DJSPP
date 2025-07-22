/**
 *
 * @param {object} component props
 * @param {Array<object>} props.seasons - An array of season objects
 * @param {object} props.selectedSeason - The selected season object
 * @returns {JSX.Element} A select dropdown with the season options
 */
export default function SeasonSelector({ seasons, selectedSeason, onChange }) {
  function handleChange(e) {
    const seasonNumber = parseInt(e.target.value);
    const selected = seasons.find((s) => s.season === seasonNumber);
    onChange(selected);
  }

  return (
    <div className="season-selector">
      <select
        id="season-select"
        onChange={handleChange}
        value={selectedSeason?.season || ""}
      >
        {seasons.map((s) => (
          <option key={s.season} value={s.season}>
            season {s.season}
          </option>
        ))}
      </select>
    </div>
  );
}

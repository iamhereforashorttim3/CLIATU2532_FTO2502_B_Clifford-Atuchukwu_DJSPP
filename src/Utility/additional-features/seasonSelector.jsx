export default function SeasonSelector({ seasons, selectedSeason, onChange }) {
  return (
    <select
      value={selectedSeason?.season || seasons[0]?.season}
      onChange={(e) => {
        const season = seasons.find(
          (s) => s.season === parseInt(e.target.value)
        );
        if (season) onChange(season);
      }}
    >
      {seasons?.map((s) => (
        <option key={s.season} value={s.season}>
          Season {s.season}
        </option>
      ))}
    </select>
  );
}

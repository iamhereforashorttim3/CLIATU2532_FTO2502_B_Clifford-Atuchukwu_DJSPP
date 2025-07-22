export default function SeasonDetail({ season }) {
  if (!season) return null;
  console.log(season.episodes);

  return (
    <>
      <div className="season-detail">
        <div className="season-season">
          <h2 className="season-number">Season: {season.season}</h2>
          <h1 className="season-title">{season.title}</h1>
        </div>
        <img className="season-image" src={season.image} alt={season.title} />
        <p className="season-description">{season.description}</p>
        <p className="season-episode">
          {season.episodes.length} Episode{season.episodes.length !== 1 && `s`}
        </p>
      </div>
      <div className="episodes">
        <h2>Episodes</h2>
        <ul>
          {season.episodes.map((episode) => (
            <li className="episode-card" key={episode.episode}>
              <img className="episode-image" src={season.image} />
              <h3 className="episode-title">{episode.title}</h3>
              <p className="episode-description">{episode.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

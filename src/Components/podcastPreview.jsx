import { Link } from "react-router-dom";

/**
 * This component is meant to display the important details of the podcasts
 * @param {*} param0
 * @returns A card that displays the podcast preview
 */
export default function PodcastPreviews({ podcasts }) {
  if (!podcasts) {
    return null;
  }
  return (
    <>
      <Link to={`/detail/${podcasts.id}`}>
        <div className="podcastPreview">
          <img className="image" src={podcasts.img} />
          <h1 className="title">{podcasts.title}</h1>
          <p className="seasons">Seasons: {podcasts.seasons}</p>
          <div className="genres">
            {podcasts.genres.map((genres, index) => (
              <span key={index} className="genre-badge">
                {genres}
              </span>
            ))}
          </div>
          <p className="last-updated">{podcasts.updated}</p>
        </div>
      </Link>
    </>
  );
}

import SeasonDetail from "./SeasonDetail";
import GenresApi from "./utility/genreApi";
import { useNavigate } from "react-router-dom";

export default function DetailPageContents({ show, selectedSeason }) {
  console.log("DetailPageContents show", show);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const totalEpisodes = show.seasons?.reduce((sum, season) => {
    return sum + (season.episodes?.length || 0);
  }, 0);

  return (
    <>
      <div>
        <button onClick={goHome} className="return-home-button">
          Return to Home
        </button>
      </div>
      <div className="detail-header">
        <div className="left-content">
          <h1 className="show-title">{show.title}</h1>
          <p className="show-description">{show.description}</p>
          <GenresApi genreNames={show.genres} />
          <div className="show-stats">
            <p className="show-seasons">
              Total Seasons: {show.seasons?.length || "N/A"}
            </p>
            <p className="show-episodes">
              Total Episodes: {totalEpisodes || "N/A"}
            </p>
            <p className="last-updated">
              Last Updated:{" "}
              {new Date(show.updated).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}{" "}
            </p>
          </div>
        </div>
        <img
          className="show-image"
          src={show.image}
          alt={`${show.title} cover`}
        />
        <div className="current">
          <h1>Current Season</h1>
          <SeasonDetail season={selectedSeason} />
        </div>
      </div>
    </>
  );
}

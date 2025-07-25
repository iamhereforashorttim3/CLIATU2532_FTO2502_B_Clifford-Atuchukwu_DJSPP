import SeasonDetail from "./SeasonDetail";
import GenresApi from "../Utility/genres/genreApi";
import { useNavigate } from "react-router-dom";
import { useAudio } from "../Utility/Audio/audioutility";
import SeasonSelector from "../Utility/additional-features/seasonSelector";

export default function DetailPageContents({
  show,
  selectedSeason,
  seasons,
  onChange,
}) {
  console.log("DetailPageContents show", show);
  const { playAudio } = useAudio();
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
          <SeasonSelector
            seasons={show.seasons}
            selectedSeason={selectedSeason}
            onChange={onChange}
          />
          <SeasonDetail
            season={selectedSeason || show.seasons}
            playAudio={playAudio}
            show={show.id}
            showTitle={show.title}
          />
        </div>
      </div>
    </>
  );
}

import { useRef, useState, useEffect } from "react";

export default function SeasonDetail({ season }) {
  if (!season) return null;

  const audioRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    if (currentAudio && audioRef.current) {
      audioRef.current.src = currentAudio;
      audioRef.current.play();
    }
  }, [currentAudio]);

  const playEpisode = (file) => {
    if (audioRef.current) {
      if (currentAudio === file && !audioRef.current.paused) {
        audioRef.current.pause();
        setCurrentAudio(null);
        return;
      }

      audioRef.current.src = file;
      audioRef.current.play();
      setCurrentAudio(file);
    }
  };

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
            <li
              className="episode-card"
              key={episode.episode}
              onClick={() => playEpisode(episode.file)}
            >
              <img className="episode-image" src={season.image} />
              <h2 className="episode-title">Episode: {episode.episode}</h2>
              <h3 className="episode-title">{episode.title}</h3>
              <p className="episode-description">{episode.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <audio ref={audioRef} controls className="bottom-audio-player" />
    </>
  );
}

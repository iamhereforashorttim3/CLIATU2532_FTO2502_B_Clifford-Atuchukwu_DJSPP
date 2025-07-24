import { useAudio } from "./audioutility";

export default function GlobalAudioPlayer() {
  const { currentTrack, isPlaying, togglePlayPause } = useAudio();

  if (!currentTrack) return null;

  return (
    <div className="global-audio-player">
      <div className="player-container">
        <div className="track-info">
          <p className="track-title">Now Playing: {currentTrack.title}</p>
          <p className="track-season">
            {currentTrack.season?.title || "Unknown Season"}
          </p>
        </div>

        <button
          onClick={togglePlayPause}
          className="play-pause-btn"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </div>
  );
}

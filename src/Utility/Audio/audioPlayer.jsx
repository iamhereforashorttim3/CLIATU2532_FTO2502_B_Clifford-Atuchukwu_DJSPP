import { useAudio } from "./audioutility";
import { useEffect, useRef, useState } from "react";

export default function GlobalAudioPlayer() {
  const { currentTrack, isPlaying, togglePlayPause } = useAudio();
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressRef = useRef();

  useEffect(() => {
    if (!currentTrack) return;

    const audio = progressRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });
    };
  }, [currentTrack]);

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setProgress(newTime);
    if (progressRef.current) {
      progressRef.current.currentTime = newTime;
    }
  };

  if (!currentTrack) return null;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!currentTrack) return null;

  return (
    <div className="global-audio-player">
      <audio
        ref={progressRef}
        src={currentTrack.audioUrl}
        onPlay={togglePlayPause}
        onPause={togglePlayPause}
        hidden
      />

      <div className="player-container">
        <div className="track-info">
          <p className="track-title">Now Playing: {currentTrack.title}</p>
          <p className="track-season">
            {currentTrack.season?.title || "Unknown Season"}
          </p>
        </div>

        <div className="progress-controls">
          <button
            onClick={togglePlayPause}
            className="play-pause-btn"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <div className="progress-bar-container">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={progress}
              onChange={handleProgressChange}
              className="progress-bar"
            />
            <div className="time-display">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

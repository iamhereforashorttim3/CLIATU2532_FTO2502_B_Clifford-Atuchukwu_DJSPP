import { useState, useRef } from "react";
import { Audioinfo } from "./audioInfo";

export const AudioProvider = ({ children }) => {
  const audio = useRef(new Audio()).current;
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (episode) => {
    if (!episode?.file) return;
    audio.src = episode.file;
    audio
      .play()
      .then(() => {
        setCurrentTrack(episode);
        setIsPlaying(true);
      })
      .catch(console.error);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else if (currentTrack) {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Audioinfo.Provider
      value={{ currentTrack, isPlaying, playAudio, togglePlayPause }}
    >
      {children}
    </Audioinfo.Provider>
  );
};

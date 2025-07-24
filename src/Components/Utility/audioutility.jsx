import React, { createContext, useState, useRef } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ audios }) => {
  const audio = useRef(new Audio()).current;
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (episode) => {
    audio.src = episode.file;
    audio.play();
    setCurrentTrack(episode);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider
      value={{ currentTrack, isPlaying, playAudio, togglePlayPause }}
    >
      {audios}
    </AudioContext.Provider>
  );
};

export const useAudio = () => React.useContext(AudioContext);

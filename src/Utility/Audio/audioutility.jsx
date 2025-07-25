import { useContext } from "react";
import { Audioinfo } from "./audioInfo";

/**
 * It is a hook used to access the audio player controls and it's state
 * @returns {object} context which is the functions of the audio player.
 */
export const useAudio = () => {
  const context = useContext(Audioinfo);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
};

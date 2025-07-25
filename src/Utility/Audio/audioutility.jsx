import { useContext } from "react";
import { Audioinfo } from "./audioInfo";

export const useAudio = () => {
  const context = useContext(Audioinfo);
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider");
  }
  return context;
};

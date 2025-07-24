import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesPage from "./Components/Utility/favourite.jsx";
import DetailPage from "./detailPage.jsx";
import App from "./App.jsx";
import GlobalAudioPlayer from "./Components/Utility/audioPlayer.jsx";
import { AudioProvider } from "./Components/Utility/audioutility.jsx";

/**
 * Renders the <App /> component inside the DOM element with the "root" id
 */
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AudioProvider>
      <Routes>
        <Route path="/favourite" element={<FavoritesPage />} />
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
      <GlobalAudioPlayer />
    </AudioProvider>
  </BrowserRouter>
);

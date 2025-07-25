import { createRoot } from "react-dom/client";
import "./Utility/styling/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavoritesPage from "./Utility/Favourite/favourite.jsx";
import DetailPage from "./detailPage.jsx";
import App from "./App.jsx";
import GlobalAudioPlayer from "./Utility/Audio/audioPlayer.jsx";
import { AudioProvider } from "./Utility/Audio/audioProvider.jsx";
import { ThemeProvider } from "./Utility/theme-toggle/themeUtil.jsx";

/**
 * Renders the <App /> component inside the DOM element with the "root" id
 */
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <AudioProvider>
        <Routes>
          <Route path="/favourite" element={<FavoritesPage />} />
          <Route path="/" element={<App />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <GlobalAudioPlayer />
      </AudioProvider>
    </ThemeProvider>
  </BrowserRouter>
);

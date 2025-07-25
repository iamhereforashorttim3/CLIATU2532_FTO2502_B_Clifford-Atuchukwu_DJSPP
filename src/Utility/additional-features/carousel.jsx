import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * A carousel that displays podcast cards
 * @returns <Carousel/>
 */
export default function Carousel({ podcasts }) {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const visibleCount = 5;

  const next = () => {
    setStartIndex((prev) => (prev + 1) % podcasts.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + podcasts.length) % podcasts.length);
  };

  const getVisibleItems = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (startIndex + i) % podcasts.length;
      return podcasts[index];
    });
  };

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      {podcasts && podcasts.length >= visibleCount && (
        <div className="carousel-container">
          <button className="carousel-arrow" onClick={prev}>
            ‹
          </button>

          <div className="carousel-track">
            {getVisibleItems().map((podcast) => (
              <div
                key={podcast.id}
                className="carousel-card"
                onClick={() => handleClick(podcast.id)}
              >
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="carousel-image"
                />
                <h4 className="carousel-title">{podcast.title}</h4>
              </div>
            ))}
          </div>

          <button className="carousel-arrow" onClick={next}>
            ›
          </button>
        </div>
      )}
    </div>
  );
}

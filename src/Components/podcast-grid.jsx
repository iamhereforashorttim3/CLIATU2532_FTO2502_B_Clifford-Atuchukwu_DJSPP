import { formatDistanceToNow } from "date-fns";
import PodcastPreviews from "./podcastPreview";

export default function PodcastGrid({ paginatedData, getGenres }) {
  return (
    <div className="podcast-grid">
      {paginatedData.map((podcast) => (
        <PodcastPreviews
          key={podcast.id}
          podcasts={{
            id: podcast.id,
            img: podcast.image,
            title: podcast.title,
            seasons: podcast.seasons,
            genres: getGenres(podcast.genres),
            updated: formatDistanceToNow(new Date(podcast.updated), {
              addSuffix: true,
            }),
          }}
        />
      ))}
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeasonSelector from "./Components/utility/seasonSelector";
import DetailPageContents from "./Components/detailPageContents";
import LoadingSpinner from "./Components/Utility/loadingSpinner";

/**
 * Renders the detail page for the specific podcast based on the ID of the URL.
 * It handles fetching podcast data, managing loading and error states.
 * Includes a select that allows users to choose which season to view.
 *
 * @returns {JSX.Element} The rendered podcast detail page
 */
function DetailPage() {
  const { id } = useParams();
  const [show, setShow] = useState();
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * It fetches the podcast details from the API using the podcast "id"
   * Updates the component state with the fetched data, if it fails an error message is displayed.
   *
   */
  async function fetchDetails() {
    try {
      const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to reach podcasts");
      }
      const data = await response.json();

      const selectedShow = data;

      if (!selectedShow) {
        throw new Error("Podcast not found");
      }

      setShow(data);
      setSelectedSeason(data.seasons[0]);
      setError(null);
    } catch (error) {
      console.error("This did not work", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * It will re-fetch the details whenever the "id" changes
   */
  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p>There was an error {error.message}</p>;
  if (!show) return null;

  return (
    <>
      <DetailPageContents show={show} selectedSeason={selectedSeason} />

      <SeasonSelector
        seasons={show.seasons}
        selectedSeason={selectedSeason}
        onChange={setSelectedSeason}
      />
    </>
  );
}

export default DetailPage;

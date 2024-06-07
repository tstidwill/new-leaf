import "./DiscoverPage.scss";
import Footer from "../../components/Footer/Footer";
import DiscoverForm from "../../components/DiscoverForm/DiscoverForm";
import MapComponent from "../../components/Map/MapComponent";

export default function DiscoverPage({
  postalCode,
  setPostalCode,
  postalCodeValidation,
  setSubmittedPostalCode,
  submittedPostalCode,
  error,
  setError,
}) {
  return (
    <>
      <main className="discover">
        <DiscoverForm
          postalCode={postalCode}
          setPostalCode={setPostalCode}
          postalCodeValidation={postalCodeValidation}
          setSubmittedPostalCode={setSubmittedPostalCode}
          error={error}
          setError={setError}
        />
        <MapComponent submittedPostalCode={submittedPostalCode} />
      </main>
      <Footer />
    </>
  );
}

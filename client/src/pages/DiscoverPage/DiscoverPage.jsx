import "./DiscoverPage.scss";
import Footer from "../../components/Footer/Footer";
import DiscoverForm from "../../components/DiscoverForm/DiscoverForm";
import NearYou from "../../components/NearYou/NearYou";
import Map from "../../components/Map/Map";

export default function DiscoverPage({
  postalCode,
  setPostalCode,
  postalCodeValidation,
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
          error={error}
          setError={setError}
        />
        <Map postalCode={postalCode} />
        <NearYou />
      </main>
      <Footer />
    </>
  );
}

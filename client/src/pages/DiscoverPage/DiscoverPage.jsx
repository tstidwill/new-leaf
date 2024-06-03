import "./DiscoverPage.scss";
import Footer from "../../components/Footer/Footer";
import DiscoverForm from "../../components/DiscoverForm/DiscoverForm";
import NearYou from "../../components/NearYou/NearYou";
import Map from "../../components/Map/Map";

export default function DiscoverPage({ postalCode, setPostalCode }) {
  return (
    <>
      <main className="discover">
        <DiscoverForm postalCode={postalCode} setPostalCode={setPostalCode} />
        <Map postalCode={postalCode} />
        <NearYou />
      </main>
      <Footer />
    </>
  );
}

import "./Map.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function Map() {
  const center = {
    lat: 45.425,
    lng: -75.695,
  };
  //starting location currently Ottawa, will become dynamic on user input

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Error loading map</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="map-container"
      center={center}
      zoom={10}
    ></GoogleMap>
  ) : (
    <div className="map-container">Loading...</div>
  );
}

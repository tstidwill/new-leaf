import { useEffect, useState } from "react";
import "./Map.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

export default function Map({ submittedPostalCode }) {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
  });

  const geocodePostalCode = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${submittedPostalCode}&key=${API_KEY}`
      );
      const data = response.data;
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates({ lat, lng });
        setError(null);
      } else {
        setError("No coordinates found for that postal code");
      }
    } catch (error) {
      setError("Error fetching geocode data");
    }
  };

  useEffect(() => {
    if (submittedPostalCode) {
      geocodePostalCode();
    }
  }, [submittedPostalCode]);

  if (loadError) {
    return <div>Error loading map.</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="map-container"
      center={coordinates}
      zoom={12}
    ></GoogleMap>
  ) : (
    <div className="map-container">Loading...</div>
  );
}

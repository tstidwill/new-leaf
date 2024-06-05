import { useEffect, useState } from "react";
import "./Map.scss";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

export default function Map({ submittedPostalCode }) {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const API_URL = import.meta.env.CORS_ORIGIN;
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [groceryShops, setGroceryShops] = useState(null);

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

  const searchGroceryStores = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/searchGroceryStores`, {
        params: {
          lat: coordinates.lat,
          lng: coordinates.lng,
        },
      });
      setGroceryShops(response.data.results);
      setError(null);
    } catch (error) {
      setError("Error fetching grocery store");
    }
  };

  useEffect(() => {
    if (submittedPostalCode) {
      geocodePostalCode();
    }

    if (coordinates) {
      searchGroceryStores();
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
    >
      {groceryShops &&
        groceryShops.length > 0 &&
        groceryShops.map((shop) => (
          <Marker
            key={shop.place_id}
            position={{
              lat: shop.geometry.location.lat,
              lng: shop.geometry.location.lng,
            }}
            title={shop.name}
          />
        ))}
    </GoogleMap>
  ) : (
    <div className="map-container">Loading...</div>
  );
}

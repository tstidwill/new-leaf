import { useEffect, useState } from "react";
import "./MapComponent.scss";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import axios from "axios";
import {} from "@vis.gl/react-google-maps";

export default function MapComponent({ submittedPostalCode }) {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const API_URL = import.meta.env.VITE_CORS_ORIGIN;
  const MAP_ID = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;

  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [groceryShops, setGroceryShops] = useState(null);

  const geocodePostalCode = async () => {
    console.log("Geocoding...");
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${submittedPostalCode}&key=${API_KEY}`
      );
      const data = response.data;
      console.log("Geocoding results:", data);
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        setCoordinates({ lat, lng });
        console.log({ lat, lng });
        setError(null);
      } else {
        setError("No coordinates found for that postal code");
      }
    } catch (error) {
      console.error("Error fetching geocode data:", error);
      setError("Error fetching geocode data");
    }
  };

  const searchGroceryStores = async () => {
    if (!coordinates) return;

    try {
      console.log("Searching stores...");
      console.log(`Request URL: ${API_URL}/api/searchGroceryStores`);

      const response = await axios.get(`${API_URL}/api/searchGroceryStores`, {
        params: {
          lat: coordinates.lat,
          lng: coordinates.lng,
        },
      });

      console.log("Response received from API (response):", response);

      if (response.data && response.data.length > 0) {
        console.log("Grocery stores found:", response.data);
        setGroceryShops(response.data);
        setError(null);
      } else {
        console.log("No grocery stores found.");
        setGroceryShops([]);
        setError("No grocery stores found");
      }
    } catch (error) {
      console.error("Error fetching grocery stores:", error);
      setGroceryShops([]);
      setError("Error fetching grocery stores");
    }
  };

  useEffect(() => {
    if (submittedPostalCode) {
      geocodePostalCode();
    }
  }, [submittedPostalCode]);

  useEffect(() => {
    if (coordinates) {
      console.log("Coordinates set:", coordinates);
      searchGroceryStores();
    }
  }, [coordinates]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <APIProvider apiKey={API_KEY}>
      {coordinates && (
        <Map
          className="map-container"
          center={{ lat: coordinates.lat, lng: coordinates.lng }}
          defaultZoom={13}
          mapId={MAP_ID}
        >
          {groceryShops &&
            groceryShops.map((shop, index) => {
              const { geometry, name } = shop;
              if (!geometry || !geometry.location) {
                console.error("Invalid coordinates for shop:", shop);
                return null;
              }
              const { location } = geometry;
              const { lat, lng } = location;
              if (!lat || !lng) {
                console.error("Invalid coordinates for shop:", shop);
                return null;
              }
              return (
                <AdvancedMarker
                  key={index}
                  position={{ lat: lat, lng: lng }}
                  title={name}
                  conte
                />
              );
            })}
        </Map>
      )}
    </APIProvider>
  );
}

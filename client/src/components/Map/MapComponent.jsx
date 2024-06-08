import { useEffect, useState } from "react";
import "./MapComponent.scss";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import axios from "axios";
import newleafMarker from "../../assets/icons/newleaf_marker.png";
import NearYou from "../NearYou/NearYou";

export default function MapComponent({ submittedPostalCode, selectedType }) {
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

  const pullLeaves = async (coordinates, selectedType) => {
    try {
      const response = await axios.get(`${API_URL}/leaves`);
      console.log(`pull leaves url: , ${API_URL}/leaves`);

      if (response.data.length > 0) {
        console.log(response.data);
        console.log(coordinates);

        const filteredShops = response.data.filter((shop) => {
          const latWithinRange =
            shop.lat >= coordinates.lat - 0.05 &&
            shop.lat <= coordinates.lat + 0.05;
          const lngWithinRange =
            shop.lng >= coordinates.lng - 0.05 &&
            shop.lng <= coordinates.lng + 0.05;

          const typeMatch =
            selectedType === "view_all" || shop.type === selectedType;
          return latWithinRange && lngWithinRange && typeMatch;
        });

        console.log(`filtered `, filteredShops);
        setGroceryShops(filteredShops);
        setError(null);
      } else {
        setGroceryShops([]);
        setError("No shops found");
      }
    } catch (error) {
      setGroceryShops([]);
      setError("Error fetching shops");
    }
  };

  const handleMarkerClick = (marker) => {
    console.log(marker);
  };

  useEffect(() => {
    if (submittedPostalCode) {
      geocodePostalCode();
    }
  }, [submittedPostalCode]);

  useEffect(() => {
    if (coordinates) {
      console.log("Coordinates set:", coordinates);
      pullLeaves(coordinates, selectedType);
    }
  }, [coordinates, selectedType]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <APIProvider apiKey={API_KEY}>
        {coordinates && (
          <Map
            className="map-container"
            center={{ lat: coordinates.lat, lng: coordinates.lng }}
            defaultZoom={13}
            mapId={MAP_ID}
          >
            {groceryShops &&
              groceryShops.map((shop) => {
                return (
                  <AdvancedMarker
                    key={shop.id}
                    position={{ lat: shop.lat, lng: shop.lng }}
                    title={shop.name}
                    onClick={() => handleMarkerClick(shop)}
                  >
                    <img src={newleafMarker} className="marker" alt="Marker" />
                  </AdvancedMarker>
                );
              })}
          </Map>
        )}
      </APIProvider>
      <NearYou groceryShops={groceryShops} />
    </>
  );
}

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import { useState } from "react";

function App() {
  const [postalCode, setPostalCode] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              postalCode={postalCode}
              setPostalCode={setPostalCode}
            />
          }
        />
        <Route
          path="/discover"
          element={
            <DiscoverPage
              postalCode={postalCode}
              setPostalCode={setPostalCode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

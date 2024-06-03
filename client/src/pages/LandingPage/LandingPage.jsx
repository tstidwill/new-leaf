import "./LandingPage.scss";
import greenLogo from "../../assets/logos/greenlogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage({ postalCode, setPostalCode }) {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPostalCode(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postalCodeFormat = /^[A-Za-z]\d[A-Za-z] ?\d[AA-Za-z]\d$/;

    if (postalCode.trim() === "") {
      setError("Please enter a postal code");
      return;
    }

    if (!postalCodeFormat.test(postalCode.trim())) {
      setError("Invalid postal code format. Format: A1A 1A1");
      return;
    }

    //post logic here
    const formattedPostalCode = postalCode.replace(/\s/g, "").toUpperCase();
    setPostalCode(formattedPostalCode);
    console.log("postal code submitted: ", formattedPostalCode);
    navigate("/discover");
  };

  return (
    <>
      <main className="landingpage">
        <div className="landingpage__logobox">
          <img src={greenLogo} className="logo"></img>
        </div>
        <div className="landingpage__body">
          <div className="landingpage__caption">
            <h4 className="landingpage__subheader">turn over a</h4>
            <h1 className="landingpage__header">new leaf</h1>
          </div>
          <div className="landingpage__cta">
            <h5>sustaible living at your fingertips</h5>
            <form className="landingpage__form" onSubmit={handleSubmit}>
              <input
                type="text"
                className={`landingpage__input ${
                  error ? "landingpage__input--error" : ""
                }`}
                placeholder="Enter your postal code.."
                name="postalCode"
                value={postalCode}
                onChange={handleChange}
              ></input>
              <div className="landingpage__error">{error}</div>
              <button
                className="button--round landingpage__button"
                type="submit"
              >
                <h6>discover</h6>
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

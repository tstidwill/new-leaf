import "./LandingPage.scss";
import greenLogo from "../../assets/logos/greenlogo.png";
import { useNavigate } from "react-router-dom";

export default function LandingPage({
  postalCode,
  setPostalCode,
  postalCodeValidation,
  setSubmittedPostalCode,
  error,
  setError,
}) {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPostalCode(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidPostalCode = postalCodeValidation(postalCode);
    if (isValidPostalCode) {
      const formattedPostalCode = postalCode.replace(/\s/g, "").toUpperCase();
      setPostalCode(formattedPostalCode);
      setSubmittedPostalCode(formattedPostalCode);
      navigate("/discover");
    }
  };

  return (
    <>
      <main className="landingpage">
        <div className="landingpage__logobox">
          <img src={greenLogo} className="logo" alt="leaf logo"></img>
        </div>
        <div className="landingpage__body">
          <div className="landingpage__caption">
            <h4 className="landingpage__subheader">turn over a</h4>
            <h1 className="landingpage__header">new leaf</h1>
          </div>
          <div className="landingpage__cta">
            <h5>sustainable living at your fingertips</h5>
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

import "./LandingPage.scss";
import darkLogo from "../../assets/logos/newleaf-logo-dark.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <main className="landingpage">
        <div className="landingpage__logobox">
          <img src={darkLogo} className="logo"></img>
        </div>
        <div className="landingpage__body">
          <div className="landingpage__caption">
            <h4 className="landingpage__subheader">turn over a</h4>
            <h1 className="landingpage__header">new leaf</h1>
          </div>
          <div className="landingpage__cta">
            <h5>sustaible living at your fingertips</h5>
            <form className="landingpage__form">
              <input
                type="text"
                className="landingpage__input"
                placeholder="Enter your postal code.."
              ></input>
              <Link className="button" to={"/discover"}>
                <button className="button--round">
                  <h6>discover</h6>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

import greenLogo from "../../assets/logos/greenlogo.png";
import { NavLink } from "react-router-dom";
import earthIcon from "../../assets/icons/earthbutton.png";
import calendarIcon from "../../assets/icons/calendarbutton.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/">
        <div className="footer__logocontainer">
          <img src={earthIcon} alt="earth icon" className="earthicon" />
          <h6>discover</h6>
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="footer__logocontainer">
          <img src={greenLogo} alt="leaf logo" className="footer__logo" />
          <h6>home</h6>
        </div>
      </NavLink>
      <NavLink to="/">
        <div className="footer__logocontainer">
          <img
            src={calendarIcon}
            alt="calendary icon"
            className="calendaricon"
          />
          <h6>events</h6>
        </div>
      </NavLink>
    </footer>
  );
}

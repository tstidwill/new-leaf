import "./EventsPage.scss";
import greenLogo from "../../assets/logos/greenlogo.png";
import pickup from "../../assets/images/pexels-shvetsa-5029810.jpg";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function LandingPage({}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="logobox">
        <img src={greenLogo} className="logo" alt="leaf logo"></img>
      </div>
      <section className="events">
        <section className="events__headerbox">
          <h2>This Month's Events</h2>
        </section>
        <section className="events__card card">
          <img src={pickup} className="card__image" />
          <h3 className="card__title"> Event Title</h3>
        </section>
      </section>
      <Footer />
    </>
  );
}

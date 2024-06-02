import "./DiscoverPage.scss";
import Footer from "../../components/Footer/Footer";

export default function DiscoverPage() {
  return (
    <>
      <main className="discover">
        <form className="form">
          <h3>discover</h3>
          <input
            type="text"
            className="form__input"
            placeholder="Enter your postal code.."
          ></input>
          <div className="dropdown">
            <select name="type">
              <option value="grocery">Zero Waste Grocery</option>
              <option vlaue="garden">Community Garden</option>
            </select>
          </div>
          <button className="button--square">search</button>
        </form>
        <div className="map"></div>

        <section className="nearyou">
          <h3 className="nearyou__header">near you</h3>
          <section className="nearyou__card">
            <img className="nearyou__image" />
            <div className="nearyou__text">
              <h4>location name</h4>
              <p>details</p>
              <button className="nearyou__button button--square">
                Find out more
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

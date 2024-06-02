import "./NearYou.scss";

export default function NearYou() {
  return (
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
  );
}

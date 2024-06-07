import "./NearYou.scss";

export default function NearYou({ groceryShops }) {
  console.log(groceryShops);
  return (
    <section className="nearyou">
      <h3 className="nearyou__header">near you</h3>

      {groceryShops &&
        groceryShops.map((shop, index) => (
          <section key={index} className="nearyou__card">
            <div className="nearyou__text">
              <h4>{shop.name}</h4>
              <p>{shop.details}</p>
              <button className="nearyou__button button--square">
                Find out more
              </button>
            </div>
          </section>
        ))}
    </section>
  );
}

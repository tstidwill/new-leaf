import "./DiscoverForm.scss";

export default function DiscoverForm() {
  return (
    <form className="discover__form">
      <h3>discover</h3>
      <input
        type="text"
        className="discover__input"
        placeholder="Enter your postal code.."
      ></input>
      <select name="type" className="discover__dropdown">
        <option value="thrift">View All</option>
        <option value="grocery">Zero Waste Grocery</option>
        <option value="garden">Community Garden</option>
        <option value="thrift">Thrift Store</option>
      </select>
      <button className="button--square">search</button>
    </form>
  );
}

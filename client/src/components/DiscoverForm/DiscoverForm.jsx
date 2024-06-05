import "./DiscoverForm.scss";

export default function DiscoverForm({
  postalCode,
  setPostalCode,
  postalCodeValidation,
  setSubmittedPostalCode,
  error,
  setError,
}) {
  const handlePostalCodeChange = (e) => {
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
      console.log("updated postal code submitted: ", formattedPostalCode);
    }
  };
  return (
    <form className="discover__form" onSubmit={handleSubmit}>
      <h3>discover</h3>
      <input
        type="text"
        name="postalcode"
        className="discover__input"
        placeholder="Enter your postal code.."
        value={postalCode}
        onChange={handlePostalCodeChange}
      ></input>
      <select name="type" className="discover__dropdown">
        <option value="thrift">View All</option>
        <option value="grocery">Zero Waste Grocery</option>
        <option value="garden">Community Garden</option>
        <option value="thrift">Thrift Store</option>
      </select>
      <div className="discover__error">{error}</div>
      <button className="button--square" type="submit">
        search
      </button>
    </form>
  );
}

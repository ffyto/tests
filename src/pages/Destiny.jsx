function Destiny() {
  const handlerChange = (evt) => {
    const value = evt.target.value;
      alert('Your destination is ' + value);
  }
    return (
      <div>
        <h1>
          Where do you want to travel?
        </h1>
        <select name="" id="" onChange={handlerChange}>
          <option disabled selected>Select a destination</option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Tokio">Tokio</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
        </select>
      </div>
    )
}

export default Destiny;
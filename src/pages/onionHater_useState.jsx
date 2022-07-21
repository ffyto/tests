import { useState } from "react";

function OnionHater_useSate() {
  const [Onion, setOnion] = useState('');
  const handlerChange = (evt) => {
    setOnion(evt.target.value);
    };
  return (
  <div>
    <div>
      <textarea id="cebolla" name="cebolla" rows="10" columns="30" placeholder="Escribe que ingredientes pones a una ensalada. Tal vez no debas incluir cebolla." onChange={handlerChange}/>
    </div>
      <h1>
      {
        Onion.includes("cebolla")
          ? "Odio la Cebolla"
          : null
      }
      </h1>
  </div>)
}

export default OnionHater_useSate;

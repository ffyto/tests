import { useState } from "react";

const cities = [
  'Buenos Aires',
  'Medellin',
  'Madagascar',
  'Nebraska',
  'New Hampshire',
  'Bahamas',
  'São Paulo',
  'Rio de Janeiro',
  'Caracas',
  'Miami',
  'Phoenix',
]

function Destiny_useState() {
  const [City, setCity] = useState('')
  const handlerChange = (evt) => {
    setCity(evt.target.value);
  }
    return (
      <div>
        <h1>
          Where do you want to travel?
        </h1>
        <select name="" id="" onChange={handlerChange}>
          <option disabled selected>Select a destination</option>
          {
            cities.sort().map((city) => (
              <option key={city} value={city}>{city}</option>))
          }
        </select>
        {
          City !== ''
            ?<h1>Yor destination is {City}</h1>
            : null
        }
      </div>
    )
}

export default Destiny_useState;
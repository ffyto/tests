function People(props) {
  const {people} = props;
  const {userName, age, city} = people;
  return (
  <div>
  <h1>Hello {userName}</h1>
  <p>City: {city} - Age: {age}</p>
  </div>)
}

export default People;
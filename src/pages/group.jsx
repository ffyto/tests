import People from '../components/people_function.jsx';


function Group() {
  const group = [
    {
      userName: 'John',
      age: 30,
      city: 'San Francisco',
    },
    {
      userName: 'Jane',
      age: 40,
      city: 'London',
    },
    {
      userName: 'Bob',
      age: 40,
      city: 'Sydney',
    },
    {
      userName: 'Mary',
      age: 50,
      city: 'Berlin',
    }
  ];
  return (
    <div>
      {
        group.map(person => (
          <People key={person.userName} people={person}/>
          ))
      }
    </div>
  )
}

export default Group;
import { useState } from "react";

function AddToDo() {
  let Tareas =[]
  const [Texto, setTexto] = useState('');
  const [Tasks, setTasks] = useState([]);

  const handlerChange = (evt) => {
    setTexto(evt.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const object = {
      texto: Texto,
      checked: false,
      id: Date.now(),
    }
    if(document.getElementById('input').value !== ''){
      setTasks([...Tasks, object])
      console.log(Tasks);
      document.getElementById('input').value = '';
    }
    else{alert("Please introduce a new task");}
  }

  const handlerChangeCheck = (id) => {
    const newTasks = Tasks.map((task)=>{
      if(task.id === id){
        task.checked = !task.checked;
      }
      return task;
    })
    setTasks(newTasks);
    console.log(Tasks)
  }
  const handlerDelete = () => {
    const newTasks = Tasks.filter(task => task.checked === false);
    setTasks(newTasks);
}
  return (
    <div>
    <ul>
    {Tasks.map((task) =>{
          return (
              <li key={task.id}>
                  <input type="checkbox" onChange={() => {handlerChangeCheck(task.id)}}/>
                  {task.texto}
              </li>
          )
     })}
     {
     }

    </ul>
    
    
      <form onSubmit={handlerSubmit}>
        <input type="text" placeholder="What's your next task?" onChange={handlerChange} name="tarea" id="input"/>
        <button type="submit" >Add to Do</button>
      </form>
      <hr/>
      <button onClick={handlerDelete}>Press to Delete done</button>
    </div>
  )
}

export default AddToDo;
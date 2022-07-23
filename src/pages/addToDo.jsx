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
    else{alert("Please, introduce a card");}
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
    <div className="ToDo__column">
      <div className="ToDo__cards">
        <ul className="ToDo__cardlist">
          {Tasks.map((task) =>{
                return (
                    <li key={task.id} className="ToDo__cardlist__item">
                        <input type="checkbox" onChange={() => {handlerChangeCheck(task.id)}} />
                        {task.texto}
                    </li>
                )
          })}
        </ul>
      </div>
      <div className="ToDo__submit">
        <form onSubmit={handlerSubmit}>
          <span className="ToDo__input"><input type="text" placeholder="What's the card's name?" onChange={handlerChange} name="tarea" id="input"/></span>
          <button type="submit" >Add the card</button>
        </form>
        <hr className="ToDo_hr"/>
        <span className="ToDo__delete"><button onClick={handlerDelete} >Press to Delete done</button></span>
      </div>
    </div>
  )
}

export default AddToDo;
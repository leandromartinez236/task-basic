import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState([]);
  const [valor, setValor] = useState('');
  
  return (
    <div className="App">
      <h1>Task Basic</h1>
      <form id='form'>
        <div>
          <label className='marginbottom'>Enter a Task</label>
          <input className='marginbottom' type='text' placeholder='Ingrese una tarea' value={valor} onChange={(e)=> setValor (e.target.value)}/> 
        </div>
        <button type='button' onClick={()=> setTask([...task, valor])}>ADD TASK</button>
        {task.map((e) => <div key={e} className='task'>{e}</div>  )}       
      </form>
    </div>
  );
}

export default App;

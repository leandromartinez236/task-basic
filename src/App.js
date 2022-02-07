import React, {useState, useEffect} from 'react';
import './App.css'

function App (){
  const [task, setTask] = useState('');
  const [listTasks, setListTasks] = useState([]);
  useEffect(()=>{
    setTask('')
  },[listTasks])
  return(
    <div className='App'>
      <h1>Task basic</h1>
      <form >
        <div>
          <label className='marginbottom'>Enter a Task</label>
          <input className='marginbottom' type="text" placeholder='Enter a task' 
          value={task} onChange={(e)=> setTask(e.target.value)}/>
        </div>
        <button type='button' onClick={()=> setListTasks([...listTasks, task])}>ADD TASK</button>
      {listTasks.map((task)=> <div className='task' key={task}>{task}</div>)}
      </form>
    </div>
  );
}
export default App;
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //Create a random UUID...

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addTask () {
    let task = document.getElementById('taskValue');
    
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        nameTask: task.value,
        finished: false
      }
    ]);
  }

  function completeTask (id, option) {
    let newTask = tasks.filter((value) => {
      if(value.id === id) {
        value.finished = option;
      }

      return value;
    })

    setTasks(newTask);
  }

  function delTask (id) {
    let deleteTask = tasks.filter((value) => {
        if(value.id !== id) {
          return value;
        }
    })

    setTasks(deleteTask);
  }

  return (
    <div className="App">
        <div className="input">
          <input type="text" id="taskValue" placeholder='Add new task' autoFocus value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} />
          <button className="addTasks" onClick={() => {
            addTask()
          }}>Add</button>
        </div>

        <div className="boxTasks">
          <h1>My Tasks</h1>
          {tasks.map((value) => {
                if(!value.finished) {
                  return (
                    <div className="taskSingle">
                      <p>{value.nameTask}</p>
                      <input type="checkbox" id='checkboxInput' onClick={() => completeTask(value.id, true)}/>
                      <button className='delete' onClick={() => delTask(value.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                  );
                } else {
                  return (
                    <div className="taskSingle">
                    <p style={{textDecoration:'line-through'}}>{value.nameTask}</p>
                    <input type="checkbox" id='checkboxInput' onClick={() => completeTask(value.id, false)}/>
                    <button className='delete' onClick={() => delTask(value.id)}><i className="fa fa-trash" aria-hidden="true"></i></button>
                  </div>
                  );
                }
            })}
            
        </div>
        

    </div>
  );
}

export default App;

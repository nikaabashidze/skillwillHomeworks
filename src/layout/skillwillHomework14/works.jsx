import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'ვარჯიში', completed: false },
    { id: 2, text: 'რეაქტის დაინსტალირება', completed: true },
    { id: 3, text: 'To do list აპლიკაცია', completed: true },
  ]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleAddTask = () => {
    const trimmedText = newTaskText.trim();

    if (trimmedText === '') {
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      text: trimmedText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };


  
  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };



  const handleIncompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: false } : task
    );
    setTasks(updatedTasks);
  };



  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className='workscont'>
      <h1>ჩაწერეთ ახალი დავალება</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTaskText}
          onChange={handleInputChange}
          placeholder="ახალი დავალება"
        />
        <button style={{color: 'white', backgroundColor : 'green'}} onClick={handleAddTask}>დამატება</button>
      </div>
     


      <div className='worklists'>
        <div className='list'>
          <h2>შესასრულებელი დავალებები:</h2>
          <ul>
            {tasks
              .filter((task) => !task.completed)
              .map((task) => (
                <li style={{padding:'5px'}} key={task.id}>
                  {task.text}{' '}
                  <button style={{cursor:'pointer', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px' }} onClick={() => handleCompleteTask(task.id)}>დასრულება</button>{' '}
                  <button style={{cursor:'pointer', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}onClick={() => handleDeleteTask(task.id)}>წაშლა</button>
                </li>
              ))}
          </ul>
        </div>

        <div className='list'>
          <h2>შესრულებული დავალებები:</h2>
          <ul>
            {tasks
              .filter((task) => task.completed)
              .map((task) => (
                <li style={{padding:'5px'}} key={task.id}>
                  {task.text}{' '}
                  <button style={{ cursor:'pointer', backgroundColor: 'black', color: 'white', border: 'none', padding: '5px 10px' }} onClick={() => handleIncompleteTask(task.id)}>შესასრულებელი</button>  {' '}      
                  <button style={{ cursor:'pointer', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}onClick={() => handleDeleteTask(task.id)}>წაშლა</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
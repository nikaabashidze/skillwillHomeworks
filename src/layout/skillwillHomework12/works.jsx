import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    tasks: [
      { id: 1, text: 'ვარჯიში', completed: false },
      { id: 2, text: 'რეაქტის დაინსტალირება', completed: true },
      { id: 3, text: 'To do list აპლიკაცია', completed: true },
    ],
    newTaskText: '',
  };





  handleInputChange = (event) => {
    this.setState({ newTaskText: event.target.value });
  };

  handleAddTask = () => {
    const { newTaskText, tasks } = this.state;
    if (newTaskText.trim() === '') {
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };

    this.setState({
      tasks: [...tasks, newTask],
      newTaskText: '',
    });
  };




  handleCompleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    this.setState({ tasks: updatedTasks });
  };


  handleIncompleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === taskId ? { ...task, completed: false } : task
    );
    this.setState({ tasks: updatedTasks });
  };

  handleDeleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.filter((task) => task.id !== taskId);
    this.setState({ tasks: updatedTasks });
  };







  
  render() {
    const { tasks, newTaskText } = this.state;


    return (
      <div className='workscont'>
        <h1>ჩაწერეთ ახალი დავალება</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTaskText}
            onChange={this.handleInputChange}
            placeholder="ახალი დავალება"
          />
          <button style={{color: 'white', backgroundColor : 'green'}} onClick={this.handleAddTask}>დამატება</button>
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
                  <button style={{cursor:'pointer', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px' }} onClick={() => this.handleCompleteTask(task.id)}>დასრულება</button>{' '}
                  <button style={{cursor:'pointer', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}onClick={() => this.handleDeleteTask(task.id)}>წაშლა</button>
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
                  <button style={{ cursor:'pointer', backgroundColor: 'black', color: 'white', border: 'none', padding: '5px 10px' }} onClick={() => this.handleIncompleteTask(task.id)}>შესასრულებელი</button>  {' '}      
                  <button style={{ cursor:'pointer', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}onClick={() => this.handleDeleteTask(task.id)}>წაშლა</button>
                          </li>))}
          </ul>
        </div>

        </div>


      </div>
    );
  }
}

export default TodoList;
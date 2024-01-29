import React, { Component } from 'react';

class TodoList extends Component {
  state = {
    tasks: [
      { id: 1, text: 'ვარჯიში', started: false, completed: false },
      { id: 2, text: 'რეაქტის დაინსტალირება', started: true, completed: false },
      { id: 3, text: 'To do list აპლიკაცია', started: true, completed: true },
    ],
    newTaskText: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    const tasksChanged =
      this.state.tasks.length !== nextState.tasks.length ||
      this.state.tasks.some((task, index) => {
        const nextTask = nextState.tasks[index];
        return (
          task.id !== nextTask?.id ||
          task.text !== nextTask?.text ||
          task.started !== nextTask?.started ||
          task.completed !== nextTask?.completed
        );
      });

    if (this.state.newTaskText !== nextState.newTaskText || tasksChanged) {
      const changedComponentTask = nextState.tasks.find(
        (task, index) => task.id !== this.state.tasks[index]?.id
      );

      if (changedComponentTask) {
        const changedComponentId = changedComponentTask.id;
        console.log('Changed Component Id:', changedComponentId);
      } else {
        console.log('Changed Component Id: N/A');
      }

      return true;
    }

    return false;
  }

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
      started: false, // Initialize as not started
      completed: false,
    };

    this.setState({
      tasks: [...tasks, newTask],
      newTaskText: '',
    });
  };

  handleStartTask = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === taskId ? { ...task, started: true } : task
    );
    this.setState({ tasks: updatedTasks });
  };

  handleInstartedTask = (taskId) => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === taskId ? { ...task, started: false } : task
    );
    this.setState({ tasks: updatedTasks });
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

    const incompleteTasks = tasks.filter((task) => !task.started);
    const startedTasks = tasks.filter((task) => task.started && !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

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
          <div className='list' style={{backgroundColor:'black'}}>
            <h2>შესასრულებელი დავალებები:</h2>
            <ul>
              {incompleteTasks.map((task) => (
                <li className='incomplateTasks' key={task.id}>
                  {task.text}{' '}
                  <button style={{cursor:'pointer', backgroundColor: 'brown', color: 'white', border: 'none', padding: '5px 10px' }} onClick={() => this.handleStartTask(task.id)}>დაწყება</button>{' '}
                  <button style={{cursor:'pointer', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}onClick={() => this.handleDeleteTask(task.id)}>წაშლა</button>
                </li>
              ))}
            </ul>
          </div>

          <div className='list' style={{backgroundColor:'brown'}}>
            <h2>დაწყებული დავალებები:</h2>
            <ul>
              {startedTasks.map((task) => (
                <li className='startedTasks' key={task.id}>
                  {task.text}{' '}
                  <button style={{cursor:'pointer', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px' }}onClick={() => this.handleCompleteTask(task.id)}>შესრულება</button>
                  <button style={{cursor:'pointer', backgroundColor: 'black', color: 'white', border: 'none', padding: '5px 10px' }} onClick={() => this.handleInstartedTask(task.id)}>შესასრულებელი</button>  {' '}      
                </li>
              ))}
            </ul>
          </div>

          <div className='list' style={{backgroundColor:'green'}}>
            <h2>შესრულებული დავალებები:</h2>
            <ul>
              {completedTasks.map((task) => (
                <li className='complatedTasks' key={task.id}>
                  {task.text}{' '}
                  <button style={{ cursor:'pointer', backgroundColor: 'brown', color: 'white', border: 'none', padding: '5px 10px' }} onClick={() => this.handleIncompleteTask(task.id)}>შესასრულებელი</button>  {' '}      
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;

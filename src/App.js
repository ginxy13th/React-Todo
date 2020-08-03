import React from 'react';
import ToDoForm from './components/TodoForm.js';
import ToDoList from './components/TodoList.js';


const tasks = [{
  task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  
}]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    }
  }

  addTask = taskName => {
    const newtask = {
      task: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newtask]
    })
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  clearCompleted = () => {
     this.setState({
       tasks: this.state.tasks.filter(task => 
        task.completed === false)
     })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask}/>
        <ToDoList tasks={this.state.tasks} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;

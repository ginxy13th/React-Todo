import React from 'react';
import ToDoForm from './components/TodoForm.js';
import ToDoList from './components/TodoList.js';
 import Task from './components/Todo.js';

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
      tasks: this.state.tasks.map(Task => {
        if (Task.id === taskId) {
          return {
            ...Task,
            completed: !Task.completed
          };
        } else {
          return Task;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask={this.addTask}/>
        <ToDoList tasks={this.state.tasks} toggleTask={this.toggleItem}/>
      </div>
    );
  }
}

export default App;

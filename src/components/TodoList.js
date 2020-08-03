// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo.js';

const ToDoList = props => {
    return (
        <div>
            {props.tasks.map(task => {
                return (
                  <Task toggleTask={props.toggleTask} key={task.id} task={Task} />  
                )
                
            })}
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}
export default ToDoList;
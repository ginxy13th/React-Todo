import React from 'react';


class ToDoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            task: '',
        }
    }

    handleChange = e => {
        this.setState({
        task: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='task'
                    value= {this.state.task}
                    onChange={this.handleChange} />
                <button>Add</button>
            </form>
        )
    }
}
export default ToDoForm
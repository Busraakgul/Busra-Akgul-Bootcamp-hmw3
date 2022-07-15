import React from "react";

export class TodosClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount() {
        this.loadData()
    }
//fetch ile todosları alma
    loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(response => {
                this.setState({ todos: response })
            })
    }
    renderTodoClass = () => {
        return (
            <React.Fragment>
                {this.state.todos.slice(0,10).map((todo, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{todo.id}</th>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                           
                        </tr>
                    )
                })}
            </React.Fragment>
        )
    }
    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">UserID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='table'>
                        {this.renderTodoClass()}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}
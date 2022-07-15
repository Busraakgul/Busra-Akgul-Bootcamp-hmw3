import React, { useEffect, useState } from 'react'

export function TodosFunction() {

    const [todos, setTodos] = useState([])
    useEffect(() => {
        loadData()
    }, [])
    const loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(Response => {
                setTodos(Response)
            })
    }
    const renderTodosFunc = () => {
        return (
                    <>
                        {todos.slice(0,10).map((todo, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{todo.id}</th>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed 
                                    ? "Completed" : "Not Completed"}</td>
                                 
                                </tr>
                            )
                        })}
            </>
        )
    }


   
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">UserID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody className='table'>
                    {renderTodosFunc()}
                </tbody>
            </table>
        </>
    )
}

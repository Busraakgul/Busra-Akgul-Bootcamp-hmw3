import React, { useEffect, useState } from 'react'

export function PostFunction() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(Response => {
                setPosts(Response)
            })
    }
    const renderBody = () => {
        return (
            <>
                {posts.slice(0,10).map((post, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row-col">{post.id}</th>
                            <td>{post.title}</td>
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
                    </tr>
                </thead>
                <tbody className='table'>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}



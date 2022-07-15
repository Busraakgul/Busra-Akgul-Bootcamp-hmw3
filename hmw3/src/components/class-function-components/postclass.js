import React from "react";

export class PostClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(Response => {
                this.setState({ posts: Response })
            })
    }

    renderBody = () => {
        return (
            <React.Fragment>
                {this.state.posts.slice(0,10).map((post, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
                        </tr>
                    )

                })}
            </React.Fragment>
        )
    }
    render() {
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
                        {this.renderBody()}
                    </tbody>
                </table>
            </>
        )
    }
}
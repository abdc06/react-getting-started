import React from "react";

const Comment = (props) => {
    return (
        <div>
            <h1>{props.content}</h1>
            <span>{props.name}</span>
        </div>
    )
}

export default Comment;
import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김태호",
        content : "안녕하세요."
    },
    {
        name: "이호진",
        content : "전 보안에 관심이 있어요"
    },
    {
        name: "박진우",
        content : "공부합시다!!"
    }
]

const CommentList = (props) => {
    return (
        <div>
            {comments.map(comment => {
                return (
                    <Comment name={comment.name} content={comment.content} />        
                )
            })}
        </div>
    )
}

export default CommentList;
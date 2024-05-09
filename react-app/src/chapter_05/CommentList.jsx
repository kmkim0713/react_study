import React from "react"
import Comment from "./Comment"

const comments = [
    {
        name: "김경민1",
        comment: "댓글 1"
    },
    {
        name: "김경민2",
        comment: "댓글 2"
    },
    {
        name: "김경민3",
        comment: "댓글 3"
    }
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;


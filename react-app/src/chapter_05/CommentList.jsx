import React from "react"
import Comment from "./Comment"

function CommentList(props) {
    return (
        <div>
            <Comment name="김경민" comment="나의 첫 댓글"/>
            <Comment name="김경민2" comment="나의 첫 댓글2"/>
        </div>
    );
}

export default CommentList;


import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "윤세종",
        comment: "악플1",
    },
    {
        name: "윤세종",
        comment: "악플2",
    },
    {
        name: "윤세종",
        comment: "악플3",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => (
                <Comment name={comment.name} comment={comment.comment} />
            ))}
        </div>
    );
}

export default CommentList;

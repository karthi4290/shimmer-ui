import React from "react";
import { CommonNest } from "./CommentNest";

const comments = [
  {
    id: 1,
    Comment: "I am comment 1",
    CommentBy: "Shankar",
    Replies: [
      {
        Comment: "I am nested 1",
        CommentBy: "Shiva",
      },
    ],
  },
  {
    id: 2,
    Comment: "I am comment 2",
    CommentBy: "Lin",
    Replies: [
      {
        Comment: "I am nested 2",
        CommentBy: "Maha",
      },
    ],
  },
  {
    id: 3,
    Comment: "I am comment 3",
    CommentBy: "Soma",
    Replies: [
      {
        Comment: "I am nested 3",
        CommentBy: "Kaleshvar",
        Replies: [
            {
              Comment: "I am nested 3",
              CommentBy: "Kaleshvar",
            },
            
          ]
      },
      
    ],
  },
];

const CommentParent = () => {
  return (
    <div>
      {comments.map((comment) => (
        <CommonNest
          key={comment.id}
          Comment={comment.Comment}
          CommentBy={comment.CommentBy}
          Replies={comment.Replies}
        />
      ))}
    </div>
  );
};

export default CommentParent;

"use client";

import { IComment } from "@/interfaces/IComment";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import ScoreCounter from "./ScoreCounter";
import ReplyButton from "./ReplyButton";
import { useContext, useLayoutEffect, useState } from "react";
import { appContext } from "@/context/appContext/appContextProvider";
import ReplyCommentBox from "./ReplyCommentBox";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Card = ({ comment }: { comment: IComment }) => {
  const { commentToFocus, currentUser } = useContext(appContext);
  const [showReplyCommentBox, setShowReplyCommentBox] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useLayoutEffect(() => {
    if (commentToFocus.current === comment.id) {
      const element = document.querySelector(
        `[id-commentid=comment-${comment.id}]`
      );
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [comment.id, commentToFocus]);

  const commentBelongsToUser = currentUser?.username === comment.user.username;

  const onReplyClick = () => {
    setShowReplyCommentBox((oldValue) => !oldValue);
  };

  const afterCommentSubmit = () => {
    setShowReplyCommentBox(false);
  };

  return (
    <>
      <div
        id-commentid={`comment-${comment.id}`}
        className="rubik p-2 bg-white rounded-lg"
      >
        <CardHeader
          user={comment.user}
          createdAt={comment.createdAt}
        ></CardHeader>
        <CardContent
          content={comment.content}
          replyingTo={comment.replyingTo}
        ></CardContent>
        <div className="flex p-2 w-full">
          <ScoreCounter
            className="flex-grow-0"
            id={comment.id}
            score={comment.score}
          ></ScoreCounter>
          <div className="flex-1"></div>
          {!commentBelongsToUser && (
            <ReplyButton
              className="flex-grow-0"
              onClick={onReplyClick}
            ></ReplyButton>
          )}
          {commentBelongsToUser && (
            <>
              <DeleteButton className="flex-grow-0" onClick={() => {}} />
              <EditButton className="flex-grow-0" onClick={() => {}} />
            </>
          )}
        </div>
      </div>
      {showReplyCommentBox ? (
        <ReplyCommentBox commentId={comment.id} onOk={afterCommentSubmit} />
      ) : null}
    </>
  );
};

export default Card;

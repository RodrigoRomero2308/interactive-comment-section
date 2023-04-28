"use client";

import { IComment } from "@/interfaces/IComment";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import ScoreCounter from "./ScoreCounter";
import ReplyButton from "./ReplyButton";
import { useContext, useLayoutEffect } from "react";
import { appContext } from "@/context/appContext/appContextProvider";

const Card = ({ comment }: { comment: IComment }) => {
  const { commentToFocus } = useContext(appContext);

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

  return (
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
      <div className="flex p-2 justify-between">
        <ScoreCounter id={comment.id} score={comment.score}></ScoreCounter>
        <ReplyButton comment={comment}></ReplyButton>
      </div>
    </div>
  );
};

export default Card;

"use client";

import { AppContextProvider } from "@/context/appContext/appContextProvider";
import { IUser } from "@/interfaces/IUser";
import { useRef, useState } from "react";
import data from "@/assets/data.json";
import { IComment } from "@/interfaces/IComment";
import CardList from "@/components/CardList";
import ReplyCommentBox from "@/components/ReplyCommentBox";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(
    data.currentUser
  );
  const [comments, setComments] = useState<IComment[]>(data.comments);
  const commentToFocus = useRef<number>();

  const addReplyToComment = (content: string, commentId?: number) => {
    if (!currentUser) return;

    const newCommment: IComment = {
      id: new Date().getTime(), // TODO: cambiar,
      content,
      createdAt: "now",
      score: 0,
      user: currentUser,
      replies: [],
    };

    const findAndAddReply = (
      commentId: number,
      commentsToLookIn: IComment[]
    ): void | IComment[] => {
      const found = commentsToLookIn.find((item) => item.id === commentId);
      if (found) {
        found.replies = [
          ...(found.replies || []),
          {
            ...newCommment,
            replyingTo: found.user.username,
          },
        ];
        return;
      } else
        return findAndAddReply(
          commentId,
          commentsToLookIn
            .filter((item) => !!item.replies)
            .map((item) => item.replies)
            .flat() as IComment[]
        );
    };

    setComments((oldComments) => {
      const cloneOfComments = JSON.parse(
        JSON.stringify(oldComments)
      ) as IComment[];

      if (commentId) {
        findAndAddReply(commentId, cloneOfComments);
      } else {
        cloneOfComments.push(newCommment);
      }

      return cloneOfComments;
    });
  };

  const changeScore = (
    commentId: number,
    action: "decrement" | "increment"
  ) => {
    const findAndChangeScore = (
      commentId: number,
      commentsToLookIn: IComment[]
    ): void | IComment[] => {
      const found = commentsToLookIn.find((item) => item.id === commentId);
      if (found) {
        found.score = found.score + (action === "decrement" ? -1 : 1);
        return;
      } else
        return findAndChangeScore(
          commentId,
          commentsToLookIn
            .filter((item) => !!item.replies)
            .map((item) => item.replies)
            .flat() as IComment[]
        );
    };

    setComments((oldComments) => {
      const cloneOfComments = JSON.parse(
        JSON.stringify(oldComments)
      ) as IComment[];

      findAndChangeScore(commentId, cloneOfComments);

      return cloneOfComments;
    });
  };

  const editComment = (newContent: string, commentId: number) => {
    const findAndEdit = (
      commentId: number,
      commentsToLookIn: IComment[]
    ): void | IComment[] => {
      const found = commentsToLookIn.find((item) => item.id === commentId);
      if (found) {
        found.content = newContent;
        return;
      } else
        return findAndEdit(
          commentId,
          commentsToLookIn
            .filter((item) => !!item.replies)
            .map((item) => item.replies)
            .flat() as IComment[]
        );
    };

    setComments((oldComments) => {
      const cloneOfComments = JSON.parse(
        JSON.stringify(oldComments)
      ) as IComment[];

      findAndEdit(commentId, cloneOfComments);

      return cloneOfComments;
    });
  };

  const deleteComment = (commentId: number) => {
    const filteredComments = (commentsToFilter: IComment[]) => {
      return commentsToFilter
        .filter((item) => item.id !== commentId)
        .map(
          (item): IComment => ({
            ...item,
            replies: item.replies ? filteredComments(item.replies) : undefined,
          })
        );
    };
    setComments((oldComments) => {
      const cloneOfComments = JSON.parse(
        JSON.stringify(oldComments)
      ) as IComment[];

      return filteredComments(cloneOfComments);
    });
  };

  return (
    <AppContextProvider
      value={{
        currentUser,
        setCurrentUser,
        comments,
        setComments,
        addReplyToComment,
        commentToFocus,
        changeScore,
        editComment,
        deleteComment,
      }}
    >
      <div className="bg-veryLightGray min-h-screen">
        <div className="w-11/12 mx-auto py-6 bg-veryLightGray flex flex-col gap-4">
          <CardList comments={comments} />
          <ReplyCommentBox />
        </div>
      </div>
    </AppContextProvider>
  );
}

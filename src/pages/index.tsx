"use client";

import { AppContextProvider } from "@/context/appContext/appContextProvider";
import { IUser } from "@/interfaces/IUser";
import { useState } from "react";
import data from "@/assets/data.json";
import { IComment } from "@/interfaces/IComment";
import ScoreCounter from "@/components/ScoreCounter";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(
    data.currentUser
  );
  const [comments, setComments] = useState<IComment[]>(data.comments);

  const firstComment = comments[0];

  return (
    <AppContextProvider
      value={{
        currentUser,
        setCurrentUser,
        comments,
        setComments,
      }}
    >
      <ScoreCounter id={firstComment.id} score={firstComment.score} />
    </AppContextProvider>
  );
}

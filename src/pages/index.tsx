"use client";

import { AppContextProvider } from "@/context/appContext/appContextProvider";
import { IUser } from "@/interfaces/IUser";
import { useState } from "react";
import data from "@/assets/data.json";
import { IComment } from "@/interfaces/IComment";
import Card from "@/components/Card";
import CardList from "@/components/CardList";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(
    data.currentUser
  );
  const [comments, setComments] = useState<IComment[]>(data.comments);

  return (
    <AppContextProvider
      value={{
        currentUser,
        setCurrentUser,
        comments,
        setComments,
      }}
    >
      <div className="bg-veryLightGray min-h-screen">
        <div className="w-11/12 mx-auto py-6 bg-veryLightGray">
          <CardList comments={comments} />
        </div>
      </div>
    </AppContextProvider>
  );
}

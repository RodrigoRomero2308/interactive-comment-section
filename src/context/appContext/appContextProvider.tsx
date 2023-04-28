import { IComment } from "@/interfaces/IComment";
import { IUser } from "@/interfaces/IUser";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IAppContext {
  currentUser?: IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser | undefined>>;
  comments: IComment[];
  setComments: Dispatch<SetStateAction<IComment[]>>;
  addReplyToComment: (content: string, commentId?: number) => void;
  commentToReply?: IComment;
  setCommentToReply: Dispatch<SetStateAction<IComment | undefined>>;
}

export const appContext = createContext<IAppContext>({
  setCurrentUser: () => undefined,
  comments: [],
  setComments: () => [],
  addReplyToComment: () => {},
  setCommentToReply: () => {},
});

export const AppContextProvider = appContext.Provider;

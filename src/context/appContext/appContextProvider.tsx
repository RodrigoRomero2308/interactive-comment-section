import { IComment } from "@/interfaces/IComment";
import { IUser } from "@/interfaces/IUser";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  createContext,
} from "react";

export interface IAppContext {
  currentUser?: IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser | undefined>>;
  comments: IComment[];
  setComments: Dispatch<SetStateAction<IComment[]>>;
  addReplyToComment: (content: string, commentId?: number) => void;
  commentToReply?: IComment;
  setCommentToReply: Dispatch<SetStateAction<IComment | undefined>>;
  commentToFocus: MutableRefObject<number | undefined>;
  changeScore: (commentId: number, action: "decrement" | "increment") => void;
}

export const appContext = createContext<IAppContext>({
  setCurrentUser: () => undefined,
  comments: [],
  setComments: () => [],
  addReplyToComment: () => {},
  setCommentToReply: () => {},
  commentToFocus: { current: 1 },
  changeScore: () => {},
});

export const AppContextProvider = appContext.Provider;

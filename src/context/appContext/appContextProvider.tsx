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
  commentToFocus: MutableRefObject<number | undefined>;
  changeScore: (commentId: number, action: "decrement" | "increment") => void;
  editComment: (newContent: string, commentId: number) => void;
  deleteComment: (commentId: number) => void;
}

export const appContext = createContext<IAppContext>({
  setCurrentUser: () => undefined,
  comments: [],
  setComments: () => [],
  addReplyToComment: () => {},
  commentToFocus: { current: 1 },
  changeScore: () => {},
  editComment: () => {},
  deleteComment: () => {},
});

export const AppContextProvider = appContext.Provider;

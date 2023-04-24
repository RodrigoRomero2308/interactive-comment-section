import { IComment } from "@/interfaces/IComment";
import { IUser } from "@/interfaces/IUser";
import { Dispatch, SetStateAction, createContext } from "react";

export interface IAppContext {
  currentUser?: IUser;
  setCurrentUser: Dispatch<SetStateAction<IUser | undefined>>;
  comments: IComment[];
  setComments: Dispatch<SetStateAction<IComment[]>>;
}

export const appContext = createContext<IAppContext>({
  setCurrentUser: () => undefined,
  comments: [],
  setComments: () => [],
});

export const AppContextProvider = appContext.Provider;

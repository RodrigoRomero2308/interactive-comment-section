import { IUser } from "./IUser";

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: IUser;
  replies?: IComment[];
}

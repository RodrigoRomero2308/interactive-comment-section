import { IComment } from "@/interfaces/IComment";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import ScoreCounter from "./ScoreCounter";
import ReplyButton from "./ReplyButton";

const Card = ({ comment }: { comment: IComment }) => {
  return (
    <div className="rubik p-2 bg-white rounded-lg">
      <CardHeader
        user={comment.user}
        createdAt={comment.createdAt}
      ></CardHeader>
      <CardContent content={comment.content}></CardContent>
      <div className="flex p-2 justify-between">
        <ScoreCounter id={comment.id} score={comment.score}></ScoreCounter>
        <ReplyButton
          id={comment.id}
          replyTo={comment.user.username}
        ></ReplyButton>
      </div>
    </div>
  );
};

export default Card;

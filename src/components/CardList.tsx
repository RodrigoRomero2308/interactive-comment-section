import { IComment } from "@/interfaces/IComment";
import CardWithComments from "./CardWithComments";

const CardList = ({ comments }: { comments: IComment[] }) => {
  return (
    <div className="flex flex-col gap-4 flex-grow">
      {comments.map((comment) => (
        <CardWithComments comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default CardList;

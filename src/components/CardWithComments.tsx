import { IComment } from "@/interfaces/IComment";
import Card from "./Card";
import CardList from "./CardList";

const CardWithComments = ({ comment }: { comment: IComment }) => {
  return (
    <div className="flex flex-col gap-4">
      <Card comment={comment} />
      {comment.replies?.length ? (
        <div className="flex gap-3 items-stretch">
          <div className="bg-lightGray w-2"></div>
          <CardList comments={comment.replies} />
        </div>
      ) : null}
    </div>
  );
};

export default CardWithComments;

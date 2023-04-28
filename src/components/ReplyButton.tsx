import { appContext } from "@/context/appContext/appContextProvider";
import { IComment } from "@/interfaces/IComment";
import { useContext } from "react";

/* eslint-disable @next/next/no-img-element */
const ReplyButton = ({ comment }: { comment: IComment }) => {
  const { setCommentToReply } = useContext(appContext);
  const handleClick = () => {
    setCommentToReply(comment);
    const replyCommentBox = document.getElementById("reply-comment-box");
    replyCommentBox?.focus();
  };
  return (
    <div onClick={handleClick} className="flex gap-1 items-center rubik p-2">
      <img
        src="images/icon-reply.svg"
        alt=""
        className="block"
        style={{
          transform: "translateY(2px)",
        }}
        width={14}
        height={14}
      ></img>
      <div className="font-semibold text-moderateBlue">Reply</div>
    </div>
  );
};

export default ReplyButton;

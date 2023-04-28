import { useContext, useRef } from "react";
import AvatarImage from "./AvatarImage";
import { appContext } from "@/context/appContext/appContextProvider";

const ReplyCommentBox = () => {
  const { currentUser, commentToReply, setCommentToReply, addReplyToComment } =
    useContext(appContext);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  if (!currentUser) return null;
  return (
    <div className="rubik p-4 bg-white rounded-lg flex flex-col gap-4">
      <textarea
        id="reply-comment-box"
        ref={textAreaRef}
        className="block w-full px-4 p-2 placeholder:text-grayishBlue border-solid border border-lightGrayishBlue rounded-lg"
        rows={3}
        placeholder="Add a comment..."
      ></textarea>
      <div className="flex justify-between items-center">
        <AvatarImage user={currentUser}></AvatarImage>
        <button
          onClick={() => {
            if (textAreaRef.current) {
              const content = textAreaRef.current.value;
              addReplyToComment(content, commentToReply?.id);
              setCommentToReply(undefined);
              textAreaRef.current.value = "";
            }
          }}
          className="bg-moderateBlue text-white px-6 py-3 rounded-lg"
        >
          SEND
        </button>
      </div>
    </div>
  );
};

export default ReplyCommentBox;

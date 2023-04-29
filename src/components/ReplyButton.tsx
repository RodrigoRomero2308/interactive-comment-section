/* eslint-disable @next/next/no-img-element */
const ReplyButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div onClick={onClick} className="flex gap-1 items-center rubik p-2">
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

const CardContent = ({
  content,
  replyingTo,
}: {
  content: string;
  replyingTo?: string;
}) => {
  return (
    <p className="p-2 text-grayishBlue">
      {replyingTo ? (
        <span className="text-moderateBlue font-bold">@{replyingTo} </span>
      ) : (
        ""
      )}
      {content}
    </p>
  );
};

export default CardContent;

/* eslint-disable @next/next/no-img-element */
const DeleteButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex gap-1 items-center rubik p-2 ${className}`}
    >
      <img
        src="images/icon-delete.svg"
        alt=""
        className="block mr-1"
        style={{
          transform: "translateY(1px)",
        }}
        width={14}
        height={14}
      ></img>
      <div className="font-semibold text-softRed">Delete</div>
    </div>
  );
};

export default DeleteButton;

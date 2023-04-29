import { appContext } from "@/context/appContext/appContextProvider";
import { useContext } from "react";

/* eslint-disable @next/next/no-img-element */
const ScoreCounter = ({
  score,
  id,
  className,
}: {
  score: number;
  id: number;
  className?: string;
}) => {
  const { changeScore } = useContext(appContext);
  const handleIncrement = () => {
    changeScore(id, "increment");
  };

  const handleDecrement = () => {
    changeScore(id, "decrement");
  };

  return (
    <div
      className={`flex p-2 bg-veryLightGray items-center gap-2 rounded-xl rubik ${className}`}
    >
      <div className="p-1" onClick={handleIncrement}>
        <img src="images/icon-plus.svg" alt="" />
      </div>
      <div className="p-1 font-bold text-moderateBlue">{score}</div>
      <div className="p-1" onClick={handleDecrement}>
        <img src="images/icon-minus.svg" alt="" />
      </div>
    </div>
  );
};

export default ScoreCounter;

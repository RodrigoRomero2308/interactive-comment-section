/* eslint-disable @next/next/no-img-element */
const ScoreCounter = ({ score, id }: { score: number; id: number }) => {
  const handleIncrement = () => {};

  const handleDecrement = () => {};

  return (
    <div className="flex p-2 bg-lightGray items-center gap-2 rounded-xl rubik">
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

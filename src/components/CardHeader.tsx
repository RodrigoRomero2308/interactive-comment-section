import { appContext } from "@/context/appContext/appContextProvider";
import { IUser } from "@/interfaces/IUser";
import { useContext } from "react";

const CardHeader = ({
  user,
  createdAt,
}: {
  user: IUser;
  createdAt: string;
}) => {
  const { currentUser } = useContext(appContext);
  return (
    <div className="flex items-center p-2 gap-3 rubik">
      <picture className="block object-contain">
        <source src={user.image.png.slice(2) /* Todas empiezan con "./" */} />
        <source src={user.image.webp.slice(2) /* Todas empiezan con "./" */} />
        <img src={user.image.png.slice(2)} alt="" width={32}></img>
      </picture>
      <div className="font-bold text-darkBlue">{user.username}</div>
      {currentUser && currentUser.username === user.username && (
        <div className="py-1 px-2 bg-moderateBlue text-white text-xs rounded-sm">
          you
        </div>
      )}

      <div className="text-grayishBlue">{createdAt}</div>
    </div>
  );
};

export default CardHeader;

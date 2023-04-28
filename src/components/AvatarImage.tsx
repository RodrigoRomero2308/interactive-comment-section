import { IUser } from "@/interfaces/IUser";

const AvatarImage = ({ user }: { user: IUser }) => {
  return (
    <picture className="block object-contain">
      <source src={user.image.png.slice(2) /* Todas empiezan con "./" */} />
      <source src={user.image.webp.slice(2) /* Todas empiezan con "./" */} />
      <img src={user.image.png.slice(2)} alt="" width={32}></img>
    </picture>
  );
};

export default AvatarImage;

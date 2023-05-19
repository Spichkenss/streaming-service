import { type FC } from "react";
import Image from "next/image";
import { type User } from "@clerk/backend";

interface SidebarUserItemProps {
  user: User;
  isFull: boolean;
}

const SidebarUserItem: FC<SidebarUserItemProps> = ({ user, isFull }) => {
  return (
    <div
      className={
        "flex cursor-pointer flex-row items-center gap-2 p-2 hover:bg-white/10"
      }
    >
      <Image
        key={user.id}
        src={user.profileImageUrl}
        alt={"user-avatar"}
        width={30}
        height={30}
        className={"rounded-full"}
      />
      {isFull ? (
        <p className={"font-medium"}>{user.username || user.firstName}</p>
      ) : null}
    </div>
  );
};

export default SidebarUserItem;

import { type FC } from "react";
import Image from "next/image";
import { type User } from "@clerk/backend";
import Link from "next/link";

interface SidebarUserItemProps {
  user: User;
  isFull: boolean;
}

const SidebarUserItem: FC<SidebarUserItemProps> = ({ user, isFull }) => {
  return (
    <Link
      href={`${user.username || ""}`}
      className={"flex  flex-row items-center gap-2 p-2 hover:bg-white/10"}
    >
      <Image
        key={user.id}
        src={user.profileImageUrl}
        alt={"user-avatar"}
        width={30}
        height={30}
        className={"avatar rounded-full"}
      />
      {isFull ? (
        <p className={"font-medium"}>{user.username || user.firstName}</p>
      ) : null}
    </Link>
  );
};

export default SidebarUserItem;

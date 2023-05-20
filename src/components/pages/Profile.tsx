import { type FC } from "react";
import { type User } from "@clerk/backend";
import StreamPlayer from "~/components/player/StreamPlayer";
import Chat from "~/components/chat/Chat";
import Image from "next/image";

interface ProfileProps {
  user: User;
}

const Profile: FC<ProfileProps> = ({ user }) => {
  return (
    <div className={"flex h-full grow flex-row"}>
      <div className={"flex h-full flex-col lg:basis-[85%]"}>
        <StreamPlayer
          src={"https://www.youtube.com/watch?v=YkOSUVzOAA4&t=7369s"}
          autoPlay={true}
          controls={true}
        />
        <div className={"flex flex-row items-center gap-4 p-4"}>
          <div className={"rounded-full border-2 border-brand p-1"}>
            <Image
              src={user.profileImageUrl}
              alt={"user-avatar"}
              width={60}
              height={60}
              className={"avatar shrink-0 rounded-full"}
            />
          </div>
          <span className={"text-xl font-semibold"}>{user.username}</span>
        </div>
      </div>
      <div className={"hidden bg-primary lg:flex lg:basis-[15%]"}>
        <Chat />
      </div>
    </div>
  );
};

export default Profile;

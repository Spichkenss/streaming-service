import { TbLayoutAlignLeft } from "react-icons/tb";
import { useState } from "react";
import { api } from "~/utils/api";
import SidebarUserItem from "~/components/layout/sidebar/user-item/SidebarUserItem";
import clsx from "clsx";
import { useUser } from "@clerk/nextjs";

const Sidebar = () => {
  const { user: currentUser } = useUser();
  const { data: users, isLoading } = api.users.getAll.useQuery(
    {
      userId: currentUser?.id || "",
    },
    { enabled: !!currentUser }
  );
  const [isFull, setIsFull] = useState(false);
  const toggleSidebar = () => {
    setIsFull((prev) => !prev);
  };
  return (
    <aside
      className={clsx(
        "fixed left-0 flex h-full flex-col items-center gap-4 bg-primary py-2",
        { "px-3": isLoading }
      )}
    >
      <TbLayoutAlignLeft
        size={24}
        className={clsx("cursor-pointer text-text", { "self-end": isFull })}
        onClick={toggleSidebar}
      />
      <div className={"flex flex-col gap-4"}>
        {users?.map((user) => (
          <SidebarUserItem user={user} key={user.id} isFull={isFull} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

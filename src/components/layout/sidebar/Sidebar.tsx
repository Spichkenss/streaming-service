import { useState } from "react";
import { api } from "~/utils/api";
import SidebarUserItem from "~/components/layout/sidebar/user-item/SidebarUserItem";
import clsx from "clsx";
import { useUser } from "@clerk/nextjs";
import ToggleViewButton from "~/components/ui/ToggleViewButton";

const Sidebar = () => {
  const { user: currentUser } = useUser();
  const { data: users, isLoading } = api.users.getAll.useQuery({
    userId: currentUser?.id || "",
  });
  const [isFull, setIsFull] = useState(false);
  const toggleSidebar = () => {
    setIsFull((prev) => !prev);
  };

  return (
    <aside
      className={clsx(
        "flex h-full flex-shrink-0 flex-col items-center gap-4 bg-primary py-2",
        { "px-3": isLoading }
      )}
    >
      <ToggleViewButton isFull={isFull} onClick={toggleSidebar} />
      <div className={"flex flex-col"}>
        {users &&
          users.map((user) => (
            <SidebarUserItem user={user} key={user.id} isFull={isFull} />
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;

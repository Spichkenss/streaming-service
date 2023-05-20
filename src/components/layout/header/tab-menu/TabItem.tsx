"use client";
import { type FC } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export interface TabItemProps {
  label: string;
  link: string;
}

const TabItem: FC<TabItemProps> = ({ label, link }) => {
  const { user } = useUser();
  const pathname = usePathname();
  if (link === "/my-profile" && user?.username) link = `/${user.username}`;
  const isCurrentPath = pathname === link;

  return (
    <Link
      href={link}
      className={clsx(
        "border-brand py-2 text-2xl font-medium hover:text-brand",
        { "border-b-4": isCurrentPath }
      )}
    >
      {label}
    </Link>
  );
};

export default TabItem;

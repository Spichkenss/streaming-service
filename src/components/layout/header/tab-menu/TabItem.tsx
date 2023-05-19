import { type FC } from "react";
import Link from "next/link";

export interface TabItemProps {
  label: string;
}

const TabItem: FC<TabItemProps> = ({ label }) => {
  return (
    <Link href={"/"} className={"py-2 text-2xl font-semibold hover:text-brand"}>
      {label}
    </Link>
  );
};

export default TabItem;

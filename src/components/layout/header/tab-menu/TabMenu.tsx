"use client";
import type { TabItemProps } from "~/components/layout/header/tab-menu/TabItem";
import TabItem from "~/components/layout/header/tab-menu/TabItem";

const tabs: TabItemProps[] = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Мой канал",
    link: "/my-profile",
  },
  {
    label: "Карта",
    link: "/map",
  },
];

const TabMenu = () => {
  return (
    <div className={"flex flex-row items-center gap-4"}>
      {tabs.map((tab, index) => (
        <TabItem key={index} label={tab.label} link={tab.link} />
      ))}
    </div>
  );
};

export default TabMenu;

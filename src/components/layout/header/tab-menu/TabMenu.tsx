"use client";
import type { TabItemProps } from "~/components/layout/header/tab-menu/TabItem";
import TabItem from "~/components/layout/header/tab-menu/TabItem";

const tabs: TabItemProps[] = [
  {
    label: "Главная",
  },
];

const TabMenu = () => {
  return (
    <div className={"flex flex-row items-center"}>
      {tabs.map((tab, index) => (
        <TabItem label={tab.label} key={index} />
      ))}
    </div>
  );
};

export default TabMenu;

import Header from "~/components/layout/header/Header";
import { type ReactNode } from "react";
import Sidebar from "~/components/layout/sidebar/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main className={"flex h-screen justify-center pt-12"}>
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default Layout;

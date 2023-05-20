import Header from "~/components/layout/header/Header";
import { type ReactNode } from "react";
import Sidebar from "~/components/layout/sidebar/Sidebar";
import { useUser } from "@clerk/nextjs";
import Loader from "~/components/ui/Loader";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isLoaded } = useUser();
  if (!isLoaded) return <Loader />;

  return (
    <>
      <Header />
      <main className={"flex-ro2 flex h-screen w-full pt-12"}>
        <Sidebar />
        {children}
      </main>
    </>
  );
};

export default Layout;

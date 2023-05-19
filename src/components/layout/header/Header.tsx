import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import TabMenu from "~/components/layout/header/tab-menu/TabMenu";

const Header = () => {
  const user = useUser();
  return (
    <header
      className={
        " fixed left-0 right-0 top-0 z-50 flex flex-row items-center justify-between bg-secondary px-4 shadow-md"
      }
    >
      <TabMenu />
      {user.isSignedIn ? (
        <UserButton
          afterSignOutUrl={"/"}
          afterMultiSessionSingleSignOutUrl={"/"}
          signInUrl={"/"}
        />
      ) : (
        <SignInButton
          mode={"modal"}
          afterSignUpUrl={"/"}
          afterSignInUrl={"/"}
        />
      )}
    </header>
  );
};

export default Header;

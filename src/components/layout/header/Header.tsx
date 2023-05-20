import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import TabMenu from "~/components/layout/header/tab-menu/TabMenu";

const Header = () => {
  return (
    <header
      className={
        " fixed left-0 right-0 top-0 z-50 flex flex-row items-center justify-between bg-secondary px-4 shadow-md"
      }
    >
      <TabMenu />
      <SignedIn>
        <UserButton
          afterSignOutUrl={"/"}
          afterMultiSessionSingleSignOutUrl={"/"}
          signInUrl={"/"}
        />
      </SignedIn>
      <SignedOut>
        <div className={"rounded bg-brand px-3 py-1"}>
          <SignInButton
            mode={"modal"}
            afterSignUpUrl={"/"}
            afterSignInUrl={"/"}
          >
            Войти
          </SignInButton>
        </div>
      </SignedOut>
    </header>
  );
};

export default Header;

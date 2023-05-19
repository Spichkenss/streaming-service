import { type GetServerSideProps, type NextPage } from "next";
import Head from "next/head";
import { SignInButton, useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/clerk-react";
import { buildClerkProps, getAuth } from "@clerk/nextjs/server";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <main className={"center h-screen"}>
        {user.isSignedIn ? (
          <SignOutButton />
        ) : (
          <SignInButton
            afterSignInUrl={"/"}
            afterSignUpUrl={"/"}
            mode={"modal"}
          />
        )}
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const auth = getAuth(ctx.req);
  if (!auth) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return new Promise((resolve) => {
    resolve({ props: { ...buildClerkProps(ctx.req) } });
  });
};

export default Home;

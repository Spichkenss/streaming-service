import { clerkClient } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Head from "next/head";
import { api } from "~/utils/api";
import Loader from "~/components/ui/Loader";
import Profile from "~/components/pages/Profile";
import { NotFound } from "next/dist/client/components/error";

interface ProfilePageUrlParams {
  params: {
    username: string;
  };
}

const ProfilePage = () => {
  const { query } = useRouter();
  const { username } = query as unknown as ProfilePageUrlParams["params"];
  const { data: user, isLoading } = api.profile.getByUsername.useQuery({
    username,
  });

  if (isLoading) return <Loader />;

  if (!user) return <NotFound />;

  return (
    <>
      <Head>
        <title>{user?.username}</title>
      </Head>
      <Profile user={user} />
    </>
  );
};

export const getStaticProps = async ({ params }: ProfilePageUrlParams) => {
  const user = await clerkClient.users.getUserList({
    username: [params.username],
  });
  if (user[0]) return { props: { username: user[0].username } };
};

export const getStaticPaths = async () => {
  const users = await clerkClient.users.getUserList();
  const paths = users.map((user) => {
    return {
      params: { username: user.username },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default ProfilePage;

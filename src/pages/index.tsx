import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
    </>
  );
};

//
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const auth = getAuth(ctx.req);
//   if (!auth) {
//     return {
//       redirect: {
//         destination: "/signin",
//         permanent: false,
//       },
//     };
//   }
//   return new Promise((resolve) => {
//     resolve({ props: { ...buildClerkProps(ctx.req) } });
//   });
// };

export default Home;

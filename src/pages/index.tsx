import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <Layout>123</Layout>
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

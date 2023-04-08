import { type NextPage } from "next";
import Head from "next/head";
import Layout from "~/components/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Personal Fitness Tracker</title>
        <meta name="description" content="Track my workouts" />
      </Head>
      <Layout>Home Page</Layout>
    </>
  );
};

export default Home;

import Head from "next/head";
import axios from "axios";
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Project from "../Component/Project";

const Index: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Frontend Development Project</title>
      </Head>
      <Project data={data} />
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res } = context;
  res.statusCode = 500;

  const data = await axios({
    url: "https://api.github.com/users/souravwebart/repos",
    responseType: "json",
  });

  if (!data) {
    return {
      notFound: true,
      redirect: {
        destination: "/",
        permanent: 500,
      },
    };
  }

  return {
    props: {
      data: data.data,
    },
  };
};

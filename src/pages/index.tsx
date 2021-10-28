import type { NextPage } from "next";

interface HomePros {
  episodes: JSON;
}

const Home: NextPage<HomePros> = ({ episodes }) => {
  return <h1>{JSON.stringify(episodes)}</h1>;
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}

export default Home;

import { GetServerSideProps } from "next";
import axios from "axios";
import Head from "next/head";
import ListMatches from "@/components/ListMatches";
import { IMatch } from "@/types/matches";
import styles from "@/styles/Home.module.css";

export interface IHome {
  matches: {
    list: IMatch[];
    isError: boolean;
  };
}

function Home({ matches }: IHome) {
  return (
    <>
      <Head>
        <title>Match Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.page}>
        <ListMatches matches={matches} />
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps<any> = async () => {
  try {
    const response = await axios.get(
      "https://app.ftoyd.com/fronttemp-service/fronttemp"
    );
    const matches: IMatch[] = response.data.data.matches;
    return {
      props: {
        matches: {
          list: matches,
          isError: false,
        },
      },
    };
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return {
      props: {
        matches: {
          list: [],
          isError: true,
        },
      },
    };
  }
};

export default Home;

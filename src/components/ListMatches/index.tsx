import { useState } from "react";
import axios from "axios";
import Notification from "@/uiKit/Notification";
import Button from "@/uiKit/Button";
import { IMatch } from "@/types/matches";
import Item from "./Item";
import styles from "./ListMatches.module.scss";

interface IProps {
  matches: {
    list: IMatch[];
    isError: boolean;
  };
}

const ListMatches = ({ matches }: IProps): React.ReactElement => {
  const [listMatches, setListMatches] = useState<IMatch[] | []>(matches.list);
  const [isLoadingMatches, setIsLoadingMatches] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(matches.isError);

  const downloadListMatches = async () => {
    setIsLoadingMatches(true);
    try {
      const response = await axios.get(
        "https://app.ftoyd.com/fronttemp-service/fronttemp"
      );
      setIsError(false);
      setListMatches(response.data.data.matches);
    } catch {
      setIsError(true);
      console.log("Ошибка: не удалось загрузить информацию");
    } finally {
      setIsLoadingMatches(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <span className={styles.description}>Match Tracker</span>
        <div className={styles.rightBlock}>
          {isError && <Notification />}
          <Button isLoading={isLoadingMatches} onClick={downloadListMatches} />
        </div>
      </section>
      {!isError && (
        <section className={styles.listMatches}>
          {listMatches?.map((item: IMatch, index: number) => (
            <Item key={index} match={item} />
          ))}
        </section>
      )}
    </div>
  );
};
export default ListMatches;

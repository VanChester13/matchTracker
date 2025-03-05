import { IMatch } from "@/types/matches";
import CommandLogo from "@/icons/CommandLogo";
import CardStatus from "@/uiKit/CardStatus";
import styles from "./Item.module.scss";

interface IProps {
  match: IMatch;
}

const Item = ({ match }: IProps): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.firstCommand}>
        <CommandLogo />
        <span>{match.awayTeam.name}</span>
      </section>
      <section className={styles.matchInfo}>
        <span>{`${match.awayScore} : ${match.homeScore}`}</span>
        <CardStatus status={match.status} />
      </section>
      <section className={styles.secondCommand}>
        <span>{match.homeTeam.name}</span>
        <CommandLogo />
      </section>
    </div>
  );
};
export default Item;

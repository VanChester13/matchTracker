import { Status } from "@/types/matches";
import cn from "classnames";
import styles from "./CardStatus.module.scss";

interface IProps {
  status: Status;
}

const CardStatus = ({ status }: IProps) => {
  const mapStatuses = {
    Finished: "Finished",
    Ongoing: "Live",
    Scheduled: "Match preparing",
  };

  console.log(status)
  return (
    <div
      className={cn(styles.cardStatus, {
        [styles.cardStatus_finished]: status === "Finished",
        [styles.cardStatus_live]: status === "Ongoing",
        [styles.cardStatus_prepare]: status === "Scheduled",
      })}
    >
      <span className={styles.text}>{mapStatuses[status]}</span>
    </div>
  );
};
export default CardStatus;

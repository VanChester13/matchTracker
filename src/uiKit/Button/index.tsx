import cn from "classnames";
import Refresh from "@/icons/Refresh";
import styles from "./Button.module.scss";

interface IProps {
  isLoading: boolean;
  onClick: () => Promise<void>;
}

const Button = ({ isLoading, onClick }: IProps): React.ReactElement => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={cn(styles.btn, {
        [styles.btn_disabled]: isLoading,
      })}
    >
      <span>Обновить</span>
      <div
        className={cn(styles.iconRefresh, {
          [styles.iconRefresh_rotate]: isLoading,
        })}
      >
        <Refresh />
      </div>
    </button>
  );
};
export default Button;

import React from "react";
import cn from "classnames";
import AlertTriangle from "@/icons/AlertTriangle";
import styles from "./Notification.module.scss";

interface IProps {
  type?: "success" | "error";
  className?: string | any;
}

const Notification: React.FC<IProps> = ({ type = "error", className }) => {
  return (
    <div
      className={cn(styles.notification, {
        [className]: !!className,
      })}
    >
      {type === "error" && (
        <>
          <AlertTriangle />
          <span>Ошибка: не удалось загрузить информацию</span>
        </>
      )}
    </div>
  );
};

export default Notification;

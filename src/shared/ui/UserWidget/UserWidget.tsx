import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./UserWidget.module.scss";
import { Button } from "../Button/Button";
import { Paths } from "../../constants/paths";

interface UserWidgetProps {
  id: string;
  avatarUrl: string;
}

export const UserWidget: FC<UserWidgetProps> = ({ id, avatarUrl }) => {
  const { pathname } = useLocation();
  return (
    <Link to={Paths.Profile}>
      <Button variant="transparent" active={pathname === Paths.Profile} padding="normal">
        <div className={styles.user}>
          {id}
          <img className={styles.avatar} src={avatarUrl} alt="user_avatar" />
        </div>
      </Button>
    </Link>
  );
};
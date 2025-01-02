import style from "./Header.module.css";
import logo from "../../assets/logo/Logo.svg";

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

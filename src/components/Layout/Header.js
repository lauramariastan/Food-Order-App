import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImg from "../../assets/meals1.jpg";
import classes from "./Header.module.css";

export const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bon Appétit</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="table with meals" />
      </div>
    </Fragment>
  );
};

export default Header;

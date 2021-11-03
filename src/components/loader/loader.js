import classes from "./loader.module.css";

export default function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.box}></div>
    </div>
  );
}

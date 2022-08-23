import styles from "./Button.module.css";

export const Button = ({ text, clickable, onClick, className }) => {

  return (
    <button className={styles.button + (className ? ` ${className}` : "")} disabled={!clickable} onClick={onClick}>{text}</button>
  );
};
import messageBox from "./MessageBox.module.css";

export const MessageBox = ({text}) => {

  return (
    <div className={messageBox.card}>
      {text}
    </div>
  );
};
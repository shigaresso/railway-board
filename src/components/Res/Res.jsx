import res from "./Res.module.css"

export const Res = (props) => {

  return (
    <div className={res.card}>
      {props.content}
    </div>
  );
};
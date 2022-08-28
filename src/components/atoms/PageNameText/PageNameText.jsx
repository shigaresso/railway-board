import pageNameText from "./PageNameText.module.css";

export const PageNameText = ({text}) => {
  return (
    <div className={pageNameText.page_name}>{text}</div>
  );
};
import inputText from "./InputText.module.css";

export const InputText = ({ text, setText, placeholder }) => {

  return (
    <input
      className={inputText.input_text}
      type="text"
      value={text}
      onChange={(event) => { setText(event.target.value) }}
      placeholder={placeholder}
    />
  );
};
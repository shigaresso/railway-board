import { useState } from "react";
import axios from "axios";
import resSendForm from "./ResSendForm.module.css"

export const ResSendForm = (props) => {
  const postUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${props.threadId}/posts`;
  const [resContent, setResContent] = useState("");

  const sendRes = async (event) => {
    event.preventDefault();
    const body = {
      post: resContent
    }
    await axios.post(postUrl, body)
      .then(_ =>
        setResContent("")
      )
      .catch(error => {
        throw new Error(error.request.status);
      });
    await props.fetchData()
  }

  return (
    <div className={resSendForm.create_new_thread}>
      <form onSubmit={async (event) => await sendRes(event)}>
        <input className={resSendForm.res_content} type="text" value={resContent} onChange={(event) => { setResContent(event.target.value) }} placeholder="投稿しよう！" />
        <button className={resSendForm.form_button} type={'submit'}>投稿</button>
      </form>
    </div>
  );
};
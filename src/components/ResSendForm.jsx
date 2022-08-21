import { useState } from "react";
import axios from "axios";
import resSendForm from "./ResSendForm.module.css"

export const ResSendForm = (props) => {
  const postUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${props.threadid}/posts`;
  const [resContent, setResContent] = useState("");

  const sendRes = async (postUrl, resContent) => {
    const body = {
      post: resContent
    }
    await axios.post(postUrl, body)
      .catch(error => {
        throw new Error(error.request.status);
      });
  }

  return (
    <div className={resSendForm.create_new_thread}>
      <form onSubmit={() => window.location.reload()}>
        <input className={resSendForm.res_content} type="text" value={resContent} onChange={(event) => { setResContent(event.target.value) }} placeholder="スレッドタイトル" />
        <button className={resSendForm.form_button} onClick={async () => await sendRes(postUrl, resContent)}>投稿</button>
      </form>
    </div>
  );
};
import { useState } from "react";
import axios from "axios";
import { Button } from '../atoms/Button/Button';
import messageSendForm from "./MessageSendForm.module.css"

export const MessageSendForm = ({ fetchData, threadId }) => {
  const postUrl = `https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts`;
  const [messageContent, setMessageContent] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    const body = {
      post: messageContent
    }
    await axios.post(postUrl, body)
      .catch(error => {
        throw new Error(error.request.status);
      });
    setMessageContent("");
    await fetchData();
  }

  return (
    <div className={messageSendForm.create_new_thread}>
      <form onSubmit={async (event) => await sendMessage(event)}>
        <input className={messageSendForm.res_content} type="text" value={messageContent} onChange={(event) => { setMessageContent(event.target.value) }} placeholder="投稿しよう！" />
        <button className={messageSendForm.form_button} type='submit'>投稿</button>
      </form>
    </div>
  );
};
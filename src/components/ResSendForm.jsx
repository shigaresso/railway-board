import { useState } from "react";
import axios from "axios";
import "./ResSendForm.css"

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
    <div className='create-new-thread'>
      <form onSubmit={() => window.location.reload()}>
        <input className='res-content' type="text" value={resContent} onChange={(event) => { setResContent(event.target.value) }} placeholder="スレッドタイトル" />
        <div className='form-bottom'>
          <button onClick={async () => await sendRes(postUrl, resContent)}>作成</button>
        </div>
      </form>
    </div>
  );
};
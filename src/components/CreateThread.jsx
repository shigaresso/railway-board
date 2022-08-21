import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postCreateThread } from '../hooks/postCreateThread';
import createThread from './CreateThread.module.css';

export const CreateThread = () => {
  const [threadName, setThreadName] = useState("");
  const navigate = useNavigate();

  const postUrl = 'https://railway-react-bulletin-board.herokuapp.com/threads';

  const sendForm = async (postUrl, threadName) => {
    try {
      await postCreateThread(postUrl, threadName)
    } catch (e) {
      switch (e.message) {
        case "404":
          alert("スレッド作成の URL が間違っていると Web サイト制作者にお伝え下さい。");
        case "500":
          alert("サーバーでエラーが発生しました。時間をおいて再度アクセスしてみて下さい。");
      }
    }
  }

  return (
    <div className={createThread.create_new_thread}>
      <p>スレッド新規作成</p>
      <form onSubmit={() => navigate('/')}>
        {/* パディングが必要 */}
        <input className={createThread.thread_title} type="text" name='thread' value={threadName} onChange={(event) => { setThreadName(event.target.value) }} placeholder="スレッドタイトル" />
        <div className={createThread.form_bottom}>
          <Link to="/" >Topに戻る</Link>
          <button onClick={async () => await sendForm(postUrl, threadName)}>作成</button>
        </div>
      </form>
    </div>
  );
};
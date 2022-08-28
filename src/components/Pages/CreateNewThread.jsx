import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postCreateThread } from '../../hooks/postCreateThread';
import { Button } from '../atoms/Button/Button';
import { InputText } from '../atoms/InputText/InputText';
import { PageNameText } from '../atoms/PageNameText/PageNameText';
import { Header } from '../Header/Header';
import createNewThread from './CreateNewThread.module.css';

export const CreateNewThread = () => {
  const [threadName, setThreadName] = useState("");
  const navigate = useNavigate();

  const postUrl = 'https://railway-react-bulletin-board.herokuapp.com/threads';

  const sendForm = async (event) => {
    event.preventDefault();
    try {
      await postCreateThread(postUrl, threadName);
    } catch (e) {
      switch (e.message) {
        case "404":
          alert("スレッド作成の URL が間違っていると Web サイト制作者にお伝え下さい。");
        case "500":
          alert("サーバーでエラーが発生しました。時間をおいて再度アクセスしてみて下さい。");
      }
    }
    navigate('/');
  }

  return (
    <>
      <Header />
      <div className={createNewThread.create_new_thread}>
        <PageNameText className={createNewThread.title} text="スレッド新規作成" />
        <form onSubmit={async (event) => await sendForm(event)}>
          <InputText text={threadName} setText={setThreadName} placeholder="スレッドタイトル" />
          <div className={createNewThread.form_bottom}>
            <Link to="/" >Topに戻る</Link>
            <Button text="作成" clickable={true} />
          </div>
        </form>
      </div>
    </>
  );
};
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchThreadDatas } from "../../hooks/useFetchApi";
import { Res } from "../Res/Res";
import { ResSendForm } from "../ResSendForm";
import threadContent from "./ThreadContent.module.css"

export const ThreadContent = () => {
  // 分割代入で値を取得することに注意する
  const { threadId } = useParams();
  const [threads, setThreads] = useState([]);
  const [firstMessage, setFirstMessage] = useState(0);

  const disableNextPageButton = threads?.posts?.length != 10 ? true : false;
  const disablePreviewPageButton = firstMessage - 10 <= -1 ? true : false;

  async function fetchData() {
    const response = await fetchThreadDatas(`https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=${firstMessage}`)
      .catch(error => {
        if (error.message.charAt(0) == 4) return alert("無効な URLです");
        if (error.message.charAt(0) == 5) return alert("ブラウザをリロードしてみて下さい。");
      });

    setThreads(response);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const changePage = async () => {
    const response = await fetchThreadDatas(`https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=${firstMessage}`)
      .catch(error => {
        if (error.message.charAt(0) == 4) return alert("無効な URLです");
        if (error.message.charAt(0) == 5) return alert("ブラウザをリロードしてみて下さい。");
      });

    setThreads(response);
  }

  // 関数内部で useState の更新関数を呼び出すとうまく変更されないので、useState の値が変更されると取得するスレッドの最初のメッセージ番号を変更するようにした。
  useEffect(() => {
    changePage();
  }, [firstMessage])

  return (
    <main className={threadContent.container}>
      <div className={threadContent.main_container}>
        <h1 className={threadContent.thread_name}>{threads.title}</h1>
        {/* posts を posts? としないとサーバーからデータを受け取る前に map を実行してしまいエラーになる */}
        {threads.posts?.map(res => <Res key={res.id} content={res.post} />)}
        <div className={threadContent.change_page}>
          <button disabled={disablePreviewPageButton} onClick={() => setFirstMessage(firstMessage - 10)}>前のページへ</button>
          <button disabled={disableNextPageButton} onClick={() => setFirstMessage(firstMessage + 10)}>次のページへ</button>
        </div>
      </div>

      <div className={threadContent.res_container}>
        <ResSendForm threadId={threadId} fetchData={fetchData} />
      </div>
    </main>
  );
};
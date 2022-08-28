import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchThreadDatas } from "../../hooks/useFetchApi";
import { Button } from "../atoms/Button/Button";
import { MessageBox } from "../atoms/MessageBox/MessageBox";
import { Header } from "../Header/Header";
import { MessageSendForm } from "../molecules/MessageSendForm";
import threadContent from "./ThreadContent.module.css"

export const ThreadContent = () => {
  // 分割代入で値を取得することに注意する
  const { threadId } = useParams();
  const [threads, setThreads] = useState([]);
  const [totalMessageCount, setTotalMessageCount] = useState(0);

  const disableNextPageButton = threads?.posts?.length != 10 ? true : false;
  const disablePreviewPageButton = totalMessageCount - 10 < 0 ? true : false;

  async function fetchData() {
    const response = await fetchThreadDatas(`https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=${totalMessageCount}`)
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
    const response = await fetchThreadDatas(`https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=${totalMessageCount}`)
      .catch(error => {
        if (error.message.charAt(0) == 4) return alert("無効な URLです");
        if (error.message.charAt(0) == 5) return alert("ブラウザをリロードしてみて下さい。");
      });

    setThreads(response);
  }

  // 関数内部で useState の更新関数を呼び出すとうまく変更されないので、useState の値が変更されると取得するスレッドの最初のメッセージ番号を変更するようにした。
  useEffect(() => {
    changePage();
  }, [totalMessageCount])

  return (
    <>
      <Header />
      <main>

        <div className={threadContent.container}>
          <div className={threadContent.main_container}>

            <h1 className={threadContent.thread_name}>{threads.title}</h1>
            {/* posts を posts? としないとサーバーからデータを受け取る前に map を実行してしまいエラーになる */}
            <div className={threadContent.wrapper}>
              <div className={threadContent.message_container}>
                {threads.posts?.map(res => <MessageBox key={res.id} text={res.post} />)}
                <div className={threadContent.change_page}>
                  <Button clickable={!disablePreviewPageButton} onClick={() => setTotalMessageCount(totalMessageCount - 10)} text="前のページへ" />
                  <Button clickable={!disableNextPageButton} onClick={() => setTotalMessageCount(totalMessageCount + 10)} text="次のページへ" />
                </div>
              </div>

              <MessageSendForm threadId={threadId} fetchData={fetchData} />
            </div>

          </div>

        </div>
      </main>
    </>
  );
};
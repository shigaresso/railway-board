import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchThreadDatas, useFetchApi } from "../../hooks/useFetchApi";
import { Thread } from "../Thread/Thread";
import "./ThreadContent.css"

export const ThreadContent = () => {
  // 分割代入で値を取得することに注意する
  const { threadId } = useParams();
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchThreadDatas(`https://railway-react-bulletin-board.herokuapp.com/threads/${threadId}/posts?offset=0`)
        .catch(error => {
          if (error.message.charAt(0) == 4) return alert("無効な URLです");
          if (error.message.charAt(0) == 5) return alert("ブラウザをリロードしてみて下さい。");
        });

      setThreads(response);
    }
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <h1 className="thread-name">{threads.title}</h1>
      <div className="threads">
        {/* posts を posts? としないとサーバーからデータを受け取る前に map を実行してしまいエラーになる */}
        {threads.posts?.map(thread => <Thread key={thread.id} title={thread.post} />)}
      </div>
    </div>
  );
};
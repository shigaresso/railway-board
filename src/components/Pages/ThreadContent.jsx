import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchThreadDatas } from "../../hooks/useFetchApi";
import { Res } from "../Res/Res";
import { ResSendForm } from "../ResSendForm";
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
    <main className="container">
      <div className="main-container">
        <h1 className="thread-name">{threads.title}</h1>
        <div className="threads">
          {/* posts を posts? としないとサーバーからデータを受け取る前に map を実行してしまいエラーになる */}
          {threads.posts?.map(res => <Res key={res.id} content={res.post} />)}
        </div>
      </div>
      
      <div className="res-container">
        <ResSendForm />
      </div>
    </main>
  );
};
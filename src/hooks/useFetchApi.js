import { useEffect, useState } from "react"

export const useFetchApi = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway-react-bulletin-board.herokuapp.com/threads', { method: 'GET' })
      .then(res => {
        if (!res.ok) throw new Error(res.status);
        return res.json();
      })
      .then(data => {
        setThreads(data);
      })
      .catch(error => {
        if (error.message.charAt(0) == 4) alert("無効な URLです");
        if (error.message.charAt(0) == 5) alert("サーバー通信でエラーが発生しました。");
      });
  }, []);

  return threads;
};
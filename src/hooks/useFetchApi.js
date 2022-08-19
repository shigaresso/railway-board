import axios from "axios";
import { useEffect, useState } from "react"

export const useFetchApi = (url) => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetchThreadDatas(url)
      .then(data => {
        setThreads(data);
      })
      .catch(error => {
        if (error.message.charAt(0) == 4) return alert("無効な URLです");
        if (error.message.charAt(0) == 5) return alert("ブラウザをリロードしてみて下さい。");
      });
  }, []);

  return threads;
};

export const fetchThreadDatas = (url) => {
  const result = axios.get(url)
    .then(response => {
      return response.data
    }).catch(error => {
      switch (error.response.status) {
        case 404:
          console.log(`Error: ${error.response.status}`);
          throw new Error(error.response.status);
      }
    });
  return result;
}

// await を用いてみたが、useEffect の内部で非同期を扱うとかえって読みにくいのでやめた。

// export const useFetchApi = () => {
//   const [threads, setThreads] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const data = await fetchThreadDatas()
//         setThreads(data)
//       } catch (error) {
//         if (error.message.charAt(0) == 4) alert("無効な URLです");
//         if (error.message.charAt(0) == 5) alert("サーバー通信でエラーが発生しました。")
//       }
//     })();
//   }, []);

//   return threads;
// };

// const fetchThreadDatas = async () => {
//   const response = await fetch('https://railway-react-bulletin-board.herokuapp.com/threads', { method: 'GET' });
//   if (!response.ok) throw new Error(response.status)
//   return await response.json();
// }
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

export const fetchThreadDatas = async (url) => {
  const result = await axios.get(url)
    .catch(error => {
      throw new Error(error.response.status);
    });
  return result.data;
}
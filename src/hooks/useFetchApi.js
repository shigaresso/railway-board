import { useEffect, useState } from "react"

export const useFetchApi = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    fetch('https://railway-react-bulletin-board.herokuapp.com/threads', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setThreads(data)
      });
  }, []);

  return threads;
};
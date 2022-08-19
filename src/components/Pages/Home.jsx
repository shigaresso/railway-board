import { Thread } from "../Thread/Thread"
import { useFetchApi } from "../../hooks/useFetchApi";
import './Home.css';

export const Home = () => {
  // alert はこちら側で呼ぶようにする
  const threads = useFetchApi('https://railway-react-bulletin-board.herokuapp.com/threads');

  return (
    <div className="main-container">
      <h1 className="new-thread">新着スレッド</h1>
      <div className="threads">
        {threads.map(thread => <Thread key={thread.id} title={thread.title} />)}
      </div>
    </div>
  );
};
import { Thread } from "./Thread"
import { useFetchApi } from "../hooks/useFetchApi";
import './Main.css';

export const Main = () => {
  const threads = useFetchApi('https://railway-react-bulletin-board.herokuapp.com/threads');

  return (
    <main>
      <div className="main-container">
        <h1 className="new-thread">新着スレッド</h1>
        <div className="threads">
          {threads.map(thread => <Thread key={thread.id} title={thread.title} />)}
        </div>
      </div>
    </main>
  );
};
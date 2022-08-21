import { Thread } from "../Thread/Thread"
import { useFetchApi } from "../../hooks/useFetchApi";
import home from './Home.module.css';

export const Home = () => {
  // alert はこちら側で呼ぶようにする
  const threads = useFetchApi('https://railway-react-bulletin-board.herokuapp.com/threads');

  return (
    <div className={home.home_container}>
      <div className={home.home_container}>
        <h1 className={home.new_thread}>新着スレッド</h1>
        <div>
          {threads.map(thread => <Thread key={thread.id} id={thread.id} title={thread.title} />)}
        </div>
      </div>
    </div>
  );
};
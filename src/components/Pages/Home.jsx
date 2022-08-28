import { ThreadBox } from "../atoms/ThreadBox/ThreadBox";
import { useFetchApi } from "../../hooks/useFetchApi";
import home from './Home.module.css';
import { Header } from "../Header/Header";
import { PageNameText } from "../atoms/PageNameText/PageNameText";

export const Home = () => {
  // alert はこちら側で呼ぶようにする
  const threads = useFetchApi('https://railway-react-bulletin-board.herokuapp.com/threads');

  return (
    <>
      <Header />
      <main className={home.home_container}>
        <div className={home.body}>
          <PageNameText className={home.new_thread} text="新着スレッド" />
          <div>
            {threads.map(thread => <ThreadBox key={thread.id} id={thread.id} title={thread.title} />)}
          </div>
        </div>
      </main>
    </>
  );
};
import { Thread } from "./Thread"
import { useFetchApi } from "../hooks/useFetchApi";

export const Main = () => {
  const threads = useFetchApi();

  return (
    <main>
      <h1>新着スレッド</h1>
      <div className="threads">
        {threads.map(thread => <Thread key={thread.id} title={thread.title} />)}
      </div>
    </main>
  );
};
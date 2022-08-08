import { Thread } from "./Thread"
import { useFetchApi } from "../hooks/useFetchApi";

export const Main = () => {
  const threads = useFetchApi();

  return (
    <main>
      <div>
        {threads.map(thread => <Thread key={thread.id} title={thread.title} />)}
      </div>
    </main>
  );
};
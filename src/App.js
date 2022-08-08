import './App.css';
import { useFetchApi } from './hooks/useFetchApi';
import { Thread } from "./components/Thread";
import { Header } from './components/Header';

function App() {
  const threads = useFetchApi();

  return (
    <div>
      <Header />

      <main>
        <div>
          {threads.map(thread => <Thread key={thread.id} title={thread.title} />)}
        </div>
      </main>

    </div>
  );
};

export default App;

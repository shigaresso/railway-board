import './App.css';
import { useFetchApi } from './hooks/useFetchApi';
import { Thread } from "./components/Thread";

function App() {
  const threads = useFetchApi();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='header'>掲示板</h1>
        <a className='header' href=''>スレッドをたてる</a>
      </header>

      <main>
        <div>
          {threads.map(thread => <Thread key={thread.id} title={thread.title} />)}
        </div>
      </main>

    </div>
  );
};

export default App;

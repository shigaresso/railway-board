import './App.css';
import { useFetchApi } from './hooks/useFetchApi';
import { Thread } from "./components/Thread";

function App() {
  const threads = useFetchApi();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {threads.map(thread => <Thread key={thread.id} title={thread.title} />)}
        </div>
      </header>
    </div>
  );
};

export default App;

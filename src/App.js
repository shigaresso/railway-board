import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateThread } from './components/CreateThread';
import { Header } from './components/Header/Header';
import { Home } from './components/Pages/Home';
import { ThreadContent } from './components/Pages/ThreadContent';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/thread/new/' element={<CreateThread />} />
          <Route path="/thread/:threadId" element={<ThreadContent />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
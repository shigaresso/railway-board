import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateNewThread } from './components/Pages/CreateNewThread';
import { Home } from './components/Pages/Home';
import { ThreadContent } from './components/Pages/ThreadContent';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/thread/new/' element={<CreateNewThread />} />
        <Route path="/thread/:threadId" element={<ThreadContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
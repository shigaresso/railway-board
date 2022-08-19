import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateThread } from './components/CreateThread';
import { Header } from './components/Header/Header';
import { Home } from './components/Pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/thread/new/' element={<CreateThread />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
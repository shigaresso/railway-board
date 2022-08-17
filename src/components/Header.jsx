import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <header className="app-header">
      <h1 className='header-content'>掲示板</h1>
      <Link to="/thread/new" className='header-content'>スレッドをたてる</Link>
    </header>
  );
};
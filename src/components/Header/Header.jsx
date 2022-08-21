import { Link } from 'react-router-dom';
import header from './Header.module.css';

export const Header = () => {
  return (
    <header className={header.app_header}>
      <h1 className={header.header_content}>掲示板</h1>
      <Link to="/thread/new" className={header.header_content}>スレッドをたてる</Link>
    </header>
  );
};
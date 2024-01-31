import '../App.css';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className='nav1'>
        <Link to='/'>
          <p>スレッド一覧</p>
        </Link>
        <h1>スレッドリスト</h1>
        <Link to='/thread/new'>
          <p>スレッド作成</p>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;

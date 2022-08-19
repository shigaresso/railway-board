import { Link, useNavigate } from 'react-router-dom';
import './CreateThread.css';

export const CreateThread = () => {
  const navigate = useNavigate();

  return (
    <div className='create-new-thread'>
      <p>スレッド新規作成</p>
      <form onSubmit={() => navigate('/')}>
        {/* パディングが必要 */}
        <input className='thread-title' type="text" name='thread' value="" placeholder="スレッドタイトル" />
        <div className='form-bottom'>
          <Link to="/" >Topに戻る</Link>
          <button onClick={() => { alert("作成ボタンを押しました") }}>作成</button>
        </div>
      </form>
    </div>
  );
};
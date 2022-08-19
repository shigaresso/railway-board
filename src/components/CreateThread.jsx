import { Link } from 'react-router-dom';
import './CreateThread.css';

export const CreateThread = () => {
  const handleSubmit = () => {
    alert("押しました")
  }

  return (
    <div className='block'>
      <p>スレッド新規作成</p>
      <form onSubmit="">
        {/* パディングが必要 */}
        <input className='thread-title' type="text" name='thread' value="" placeholder="スレッドタイトル" />
        <div className='form-bottom'>
          <Link to="/" >Topに戻る</Link>
          <button onClick={() => handleSubmit()}>作成</button>
        </div>
      </form>
    </div>
  );
};
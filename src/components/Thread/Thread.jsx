import { useNavigate } from 'react-router-dom';
import thread from './Thread.module.css'

export const Thread = (props) => {
  const navigate = useNavigate();

  const linkThread = () => {
    navigate(`/thread/${props.id}`)
  }

  return (
    <div className={thread.card} onClick={() => linkThread()}>
      {props.title}
    </div>
  );
};
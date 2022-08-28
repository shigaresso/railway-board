import { useNavigate } from 'react-router-dom';
import threadBox from './ThreadBox.module.css'

export const ThreadBox = ({id, title}) => {
  const navigate = useNavigate();

  const linkThread = () => {
    navigate(`/thread/${id}`)
  }

  return (
    <div className={threadBox.card} onClick={() => linkThread()}>
      {title}
    </div>
  );
};
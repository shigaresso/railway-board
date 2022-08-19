import { useNavigate } from 'react-router-dom';
import './Thread.css'

export const Thread = (props) => {
  const navigate = useNavigate();

  const linkThread = () => {
    navigate(`/thread/${props.id}`)
  }

  return (
    <div className="card">
      <h1 onClick={() => linkThread()}>{props.title}</h1>
    </div>
  );
};
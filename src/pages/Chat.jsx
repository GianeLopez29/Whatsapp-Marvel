import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import MessageForm from '../components/MessageForm';
import './Chat.css';

export default function Chat() {
  const { userId } = useParams();
  const { messages } = useContext(ChatContext);

  return (
    <div className="chat">
      <h2>Chat con usuario #{userId}</h2>
      <div className="messages">
        {(messages[userId] || []).map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>
      <MessageForm userId={userId} />
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import MessageForm from '../components/MessageForm';

export default function Chat() {
  const { userId } = useParams();
  const { messages } = useContext(ChatContext);

  return (
    <div style={{ padding: '1rem', background: '#0f0f1a', minHeight: '100vh' }}>
      <h2>Chat con personaje #{userId}</h2>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        maxHeight: '70vh',
        overflowY: 'auto',
        padding: '1rem',
        background: '#1e1e2e',
        borderRadius: '8px'
        }}>
        {(messages[userId] || []).map((msg, i) => (
          <div
          key={i}
          style={{
            alignSelf: msg.from === 'bot' ? 'flex-start' : 'flex-end',
            background: msg.from === 'bot' ? '#2c2c3c' : '#e62429',
            color: msg.from === 'bot' ? '#ccc' : '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '15px',
            maxWidth: '75%',
            wordWrap: 'break-word'
            }}>
            {msg.text}
            </div>
            ))}
    </div>

      <MessageForm userId={userId} />
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
      <Link
      to="/"
      style={{
        padding: '0.5rem 1rem',
        background: '#333',
        color: '#fff',
        borderRadius: '5px',
        display: 'inline-block'
        }}
        >
        ← Volver al inicio
        </Link>
        </div>
        </div>
        );
}

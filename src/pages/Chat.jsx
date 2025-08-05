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
        padding: '1rem',
        border: '1px solid #333',
        borderRadius: '8px',
        marginBottom: '1rem',
        maxHeight: '60vh',
        overflowY: 'auto'
      }}>
        {(messages[userId] || []).map((msg, i) => (
          <p key={i} style={{ color: msg.from === 'bot' ? '#00cfff' : '#fff' }}>
            <strong>{msg.from === 'bot' ? 'MarvelBot' : 'Tú'}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <MessageForm userId={userId} />

      <div style={{ marginTop: '1.5rem' }}>
        <Link
          to="/"
          style={{
            padding: '0.5rem 1rem',
            background: '#555',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none'
          }}
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}

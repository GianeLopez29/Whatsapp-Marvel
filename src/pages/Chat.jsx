import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import MessageForm from '../components/MessageForm';

const users = [
  {
    id: '1',
    name: 'Iron Man',
    avatar: '/public/ironman.jpg'
  },
  {
    id: '2',
    name: 'Captain America',
    avatar: '/public/cap.jpg'
  },
  {
    id: '3',
    name: 'Black Widow',
    avatar: '/public/widow.jpg'
  }
];


export default function Chat() {
  const { userId } = useParams();
  const { messages } = useContext(ChatContext);

  const user = users.find(u => u.id === userId);

  return (
    <div className="container">
      <h2 style={{ margin: 0 }}>
    🦸 Chat con: <span style={{ color: '#e62429' }}>{user?.name || 'Desconocido'}</span>
    </h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#1e1e2e',
        padding: '1rem',
        borderRadius: '10px',
        justifyContent: 'center'
        }}>
        <img
        src={user?.avatar}
        alt={user?.name}
        style={{width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover'
    }}
  />
        {(messages[userId] || []).map((msg, i) => (
          <div
            key={i}
            className={`bubble ${msg.from}`}
          >
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

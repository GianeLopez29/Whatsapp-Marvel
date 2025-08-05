import { Link } from 'react-router-dom';

const users = [
  { id: '1', name: 'Iron Man', avatar: '/public/ironman.jpg' },
  { id: '2', name: 'Captain America', avatar: '/public/cap.jpg' },
  { id: '3', name: 'Black Widow', avatar: '/public/widow.jpg' }
];

export default function Home() {
  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Whatsapp Marvel</h1>
      {users.map(user => (
        <Link
          to={`/chat/${user.id}`}
          key={user.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            background: '#1f1f1f',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}
        >
          <img src={user.avatar} alt={user.name} className="avatar" />
          <span>{user.name}</span>
        </Link>
      ))}
    </div>
  );
}

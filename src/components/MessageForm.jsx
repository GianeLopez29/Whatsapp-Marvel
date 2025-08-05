import { useState, useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

export default function MessageForm({ userId }) {
  const [text, setText] = useState('');
  const { addMessage } = useContext(ChatContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addMessage(userId, text);
      setText('');
    }
  };

  return (
   <form onSubmit={handleSubmit} style={{
  display: 'flex',
  gap: '0.5rem',
  marginTop: '1rem'
}}>
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Escribí tu mensaje..."
    required
    style={{
      flex: 1,
      padding: '0.75rem',
      borderRadius: '20px',
      border: 'none',
      background: '#2a2a2a',
      color: 'white'
    }}
  />
  <button
    type="submit"
    style={{
      padding: '0.75rem 1rem',
      background: '#e62429',
      border: 'none',
      borderRadius: '20px',
      color: '#fff'
    }}
  >
    Enviar
  </button>
</form>
  );
}


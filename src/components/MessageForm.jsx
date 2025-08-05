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
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un mensaje..."
        required
        style={{
          flex: 1,
          padding: '0.5rem',
          borderRadius: '5px',
          border: 'none'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.5rem 1rem',
          background: '#e62429',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Enviar
      </button>
    </form>
  );
}


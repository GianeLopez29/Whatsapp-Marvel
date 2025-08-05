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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un mensaje..."
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

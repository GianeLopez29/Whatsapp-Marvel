import { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState({});

  const botReplies = {
    "1": [
      "Soy Iron Man. ¿Te puedo ayudar con algo?",
      "Mi traje está más avanzado que nunca.",
      "¿Jarvis? ¡Ya no lo uso!",
      "no soy solo un superhéroe, soy un genio, millonario, playboy y filántropo."
    ],
    "2": [
      "¡Hola! Soy el Capitán América.",
      "¿Te puedo ayudar con algo soldado?",
      "Los valores importan más que nunca.",
      "¿Estás listo para luchar por la justicia?",
    ],
    "3": [
      "Black Widow al habla.",
      "El sigilo es parte de mi entrenamiento.",
      "¿Confías en mí?",
      "No subestimes el poder de una mujer vengadora.",
    ]
  };

  const getBotReply = (userId) => {
    const respuestas = botReplies[userId] || ["Hola, soy un Vengador"];
    const index = Math.floor(Math.random() * respuestas.length);
    return respuestas[index];
  };

  const addMessage = (userId, message) => {
    setMessages(prev => {
      const userMsgs = [...(prev[userId] || []), { from: 'user', text: message }];
      const botMsg = getBotReply(userId);
      const fullMsgs = [...userMsgs, { from: 'bot', text: botMsg }];
      return { ...prev, [userId]: fullMsgs };
    });
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

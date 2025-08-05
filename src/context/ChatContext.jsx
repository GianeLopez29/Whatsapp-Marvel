import { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState({});
    
    const addMessage = (userId, message) => {
        setMessages(prev => ({
            ...prev,
            [userId]: [...(prev[userId] || []), message],
        }));
    };
    return (
    <ChatContext.Provider value={{ messages, addMessage }}>
    {children}
    </ChatContext.Provider>
    );
};

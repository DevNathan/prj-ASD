import React, { createContext, useContext, useState } from "react";
import { ChatMessage } from "@/types/ChatType";

type MessageContextType = {
    messages: ChatMessage[];
    addMessage: (message: ChatMessage) => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const addMessage = (message: ChatMessage) => {
        setMessages((prev) => [...prev, message]);
    };

    return (
        <MessageContext.Provider value={{ messages, addMessage }}>
    {children}
    </MessageContext.Provider>
);
};

export const useDisplayMessages = () => {
    const context = useContext(MessageContext);
    if (!context) {
        throw new Error("useMessageContext must be used within a MessageProvider");
    }
    return context;
};

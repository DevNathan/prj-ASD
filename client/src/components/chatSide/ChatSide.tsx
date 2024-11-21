import React, { useEffect, useRef } from "react";
import * as S from "./style";
import Chat from "@/components/chatSide/chat/Chat";
import { ChatMessage } from "@/types/ChatType";

type Props = {
  messages: ChatMessage[];
};

const ChatSide = ({ messages }: Props) => {
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <S.Container>
      <S.ChatWrapper>
        {messages.map((msg, index) => (
          <Chat key={index} type={msg.type} text={msg.message} />
        ))}
        <div ref={chatEndRef} />
      </S.ChatWrapper>
    </S.Container>
  );
};

export default ChatSide;

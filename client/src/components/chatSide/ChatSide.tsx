import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Chat from "@/components/chatSide/chat/Chat";
import useWebSocket from "@/hooks/useWebSocket";

const ChatSide = () => {
  const SERVER = process.env.REACT_APP_SOCKET_SERVER_DOMAIN;

  const chatEndRef = useRef<HTMLDivElement>(null);
  const { messages } = useWebSocket(`ws://${SERVER}`);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <S.Container>
      {!SERVER ? (
        <div>환경변수가 정의되지 않아 정상적으로 실행되지 않습니다.</div>
      ) : (
        <S.ChatWrapper>
          {messages.map((msg, index) => (
            <Chat key={index} type={msg.type} text={msg.message} />
          ))}
          <div ref={chatEndRef} />
        </S.ChatWrapper>
      )}
    </S.Container>
  );
};

export default ChatSide;

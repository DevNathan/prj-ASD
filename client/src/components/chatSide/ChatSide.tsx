import React, { useEffect, useRef } from "react";
import * as S from "./style";
import Chat from "@/components/chatSide/chat/Chat";
import { useDisplayMessages } from "@/contexts/MessageContext";
import MicIcon from "@/assets/MicIcon";
import { useMicIndicator } from "@/contexts/MicIndicatorContext";

const ChatSide = () => {
  const chatEndRef = useRef<HTMLDivElement>(null);
  const { messages } = useDisplayMessages();
  const { show } = useMicIndicator();

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
      {show && (
        <S.IndicatorSetter>
          <S.MicIndicatorWrapper>
            <MicIcon fill={"#000"} />
          </S.MicIndicatorWrapper>
        </S.IndicatorSetter>
      )}
    </S.Container>
  );
};

export default ChatSide;

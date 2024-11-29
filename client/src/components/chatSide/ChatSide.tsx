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

  const prevMessageLength = useRef<number>(0);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // 메시지 길이가 증가했을 때만 소리 재생
    if (messages.length > prevMessageLength.current) {
      console.log("작동");
      const audio = new Audio("/sounds/ping.mp3");
      audio
        .play()
        .catch((error) => console.error("Audio playback failed:", error));
    }
    prevMessageLength.current = messages.length;

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

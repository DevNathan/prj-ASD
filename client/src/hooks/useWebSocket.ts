import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/types/ChatType";

type UseWebSocketResult = {
  messages: ChatMessage[];
};

const useWebSocket = (url: string): UseWebSocketResult => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  // 받은 메시지는 STT: {text} 혹은 TTS: {text}로 올 것.
  function transformMessage(rawMessage: string): ChatMessage | null {
    if (rawMessage.startsWith("STT:")) {
      return {
        type: "USER",
        message: rawMessage.replace("STT:", "").trim(),
      };
    } else if (rawMessage.startsWith("TTS:")) {
      return {
        type: "BOT",
        message: rawMessage.replace("TTS:", "").trim(),
      };
    }
    return null;
  }

  // 웹소켓 연결 및 메시지 수신 처리
  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onmessage = (e) => {
      const transformedMessage = transformMessage(e.data);
      if (transformedMessage) {
        setMessages((prev) => [...prev, transformedMessage]);
      }
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  return { messages };
};

export default useWebSocket;

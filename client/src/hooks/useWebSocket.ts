import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/types/ChatType";

type UseWebSocketResult = {
  messages: ChatMessage[];
};

const useWebSocket = (url: string): UseWebSocketResult => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  // 웹소켓 연결 및 메시지 수신 처리
  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onmessage = (e) => {
      const data: ChatMessage = JSON.parse(e.data);
      setMessages((prev) => [...prev, data]);
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

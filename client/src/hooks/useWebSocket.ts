import { useEffect, useRef } from "react";
import { ChatMessage } from "@/types/ChatType";
import {useDisplayMessages} from "@/contexts/MessageContext";
import {useMicIndicator} from "@/contexts/MicIndicatorContext";

type UseWebSocketResult = {
  sendMessage: (message: string) => void;
};

function transformMessage(rawMessage: string): ChatMessage | null {
  console.log(rawMessage);
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

const useWebSocket = (
    url: string,
): UseWebSocketResult => {
  const {handleMicDisplay} = useMicIndicator();
  const {addMessage} = useDisplayMessages();
  const socketRef = useRef<WebSocket | null>(null);

  const sendMessage = (message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      console.error("웹소켓 연결이 끊겨있습니다. 연결을 확인해주세요.");
    }
  };

  useEffect(() => {
    socketRef.current = new WebSocket(url);

    socketRef.current.onmessage = (e) => {
      const rawMessage = e.data;

      // 마이크 관련 메시지 처리
      if (rawMessage === "RECORD_START" || rawMessage === "RECORD_STOP") {
        handleMicDisplay(rawMessage);
        return;
      }

      // 일반 메시지 처리
      const transformedMessage = transformMessage(rawMessage);
      if (transformedMessage) {
        addMessage(transformedMessage); // 일반 메시지 전달
      }
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url]);

  return { sendMessage };
};

export default useWebSocket;
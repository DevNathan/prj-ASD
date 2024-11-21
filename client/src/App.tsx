import React from "react";
import Layout from "@/components/layout/Layout";
import ButtonSide from "@/components/buttonsSide/ButtonSide";
import ChatSide from "@/components/chatSide/ChatSide";
import useWebSocket from "@/hooks/useWebSocket";

function App() {
  const SERVER = process.env.REACT_APP_SOCKET_SERVER_DOMAIN;
  const { messages, sendMessage } = useWebSocket(`ws://${SERVER}`);

  return (
    <Layout>
      <ButtonSide sendMessage={sendMessage} />
      <ChatSide messages={messages} />
    </Layout>
  );
}

export default App;

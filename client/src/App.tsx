import React from "react";
import Layout from "@/components/layout/Layout";
import ButtonSide from "@/components/buttonsSide/ButtonSide";
import ChatSide from "@/components/chatSide/ChatSide";

function App() {
  return (
    <Layout>
      <ButtonSide />
      <ChatSide />
    </Layout>
  );
}

export default App;

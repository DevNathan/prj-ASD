import React from "react";
import Layout from "@/components/layout/Layout";
import ButtonSide from "@/components/buttonsSide/ButtonSide";
import ChatSide from "@/components/chatSide/ChatSide";
import useWebSocket from "@/hooks/useWebSocket";
import {MessageProvider} from "@/contexts/MessageContext";

function App() {
    const SERVER = process.env.REACT_APP_SOCKET_SERVER_DOMAIN;
    const {sendMessage} = useWebSocket(`ws://${SERVER}`);

    return (
        <Layout>
            <ButtonSide sendMessage={sendMessage}/>
            <ChatSide/>
        </Layout>
    );
}

export default App;

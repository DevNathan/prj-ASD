import express, { Request, Response } from "express";
import { config } from "dotenv";
import "tsconfig-paths/register.js";
import * as http from "node:http";
import * as ws from "ws";

config();

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

const server = http.createServer(app);
const wss = new ws.Server({ server });
const clients: ws.WebSocket[] = [];

wss.on("connection", (ws: ws.WebSocket) => {
  console.log("클라이언트가 연결되었습니다.");
  clients.push(ws);

  ws.on("message", (message: string) => {
    try {
      handleWebSocketMessage(message);
    } catch (error) {
      console.error("메시지 처리 중 오류:", error);
    }
  });

  ws.on("close", () => {
    console.log("클라이언트 연결이 종료되었습니다.");
    const index = clients.indexOf(ws);
    if (index > -1) clients.splice(index, 1);
  });
});

const handleWebSocketMessage = (message: string) => {
  console.log("웹소켓 메시지 수신:", message);
};

app.post("/send-message", (req: Request, res: Response) => {
  const { message } = req.body;

  console.log("HTTP 요청을 통해 메시지 수신:", message);
  handleHTTPMessage(message);
  res.send("메시지가 WebSocket을 통해 전송되었습니다.");
});

const handleHTTPMessage = (message: string) => {
  console.log("HTTP 메시지 처리:", message);
  clients.forEach((client) => {
    if (client.readyState === ws.WebSocket.OPEN) {
      client.send(message);
    }
  });
};

server.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

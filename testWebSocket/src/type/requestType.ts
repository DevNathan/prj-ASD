export type ChatType = "BOT" | "USER";

export type ChatMessage = {
  type: ChatType;
  message: string;
};

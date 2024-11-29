import React from "react";
import * as S from "./style";
import { ChatType } from "@/types/ChatType";

type Props = {
  type: ChatType;
  text: string;
};

const Chat = ({ type, text }: Props) => {
  return (
    <S.Wrapper type={type}>
      {type === "BOT" && <S.Image src={"/images/알덕이.png"} alt={"알덕이"} />}
      <S.TextBox className={type === "BOT" ? "left" : "right"}>
        <span>{text}</span>
        <div className={"tail"} />
      </S.TextBox>
    </S.Wrapper>
  );
};

export default Chat;

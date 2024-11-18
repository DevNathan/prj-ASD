import React from "react";
import * as S from "./style";
import { ChatType } from "@/types/ChatType";
import { TextBox } from "./style";
import classNames from "classnames";

type Props = {
  type: ChatType;
  text: string;
};

const Chat = ({ type, text }: Props) => {
  return (
    <S.Wrapper type={type}>
      {type === "BOT" && <S.Image src={"/images/알덕이.png"} alt={"알덕이"} />}
      <S.TextBox>
        <span>{text}</span>
        <div
          className={classNames("tail", type === "BOT" ? "left" : "right")}
        />
      </S.TextBox>
    </S.Wrapper>
  );
};

export default Chat;

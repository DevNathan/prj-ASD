import React from "react";
import * as S from "./style";
import Button from "@/components/buttonsSide/button/Button";

type Props = {
  sendMessage: (message: string) => void;
};

const ButtonSide = ({ sendMessage }: Props) => {
  return (
    <S.Container>
      <Button
        imageLink={"/images/ambulance.png"}
        text={"응급실"}
        action={() => {
          sendMessage("a");
        }}
      />
      <Button
        imageLink={"/images/write.png"}
        text={"수납 창구"}
        action={() => {
          sendMessage("b");
        }}
      />
      <Button
        imageLink={"/images/store.png"}
        text={"편의점"}
        action={() => {
          sendMessage("c");
        }}
      />
      <Button
        imageLink={"/images/wc.png"}
        text={"화장실"}
        action={() => {
          sendMessage("d");
        }}
      />
    </S.Container>
  );
};

export default ButtonSide;

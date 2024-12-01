import React from "react";
import * as S from "./style";

type Props = {
  imageLink: string;
  text: string;
  action: () => void;
};

const Button = ({ text, imageLink, action }: Props) => {
  const playSound = () => {
    const audio = new Audio("/sounds/button.mp3");
    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
    });
    action();
  };

  return (
    <S.Button onClick={playSound}>
      <S.Image src={imageLink} />
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export default Button;

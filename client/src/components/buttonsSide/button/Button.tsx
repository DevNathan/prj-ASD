import React from "react";
import * as S from "./style";

type Props = {
  imageLink: string;
  text: string;
  action: () => void;
};

const Button = ({ text, imageLink, action }: Props) => {
  return (
    <S.Button onClick={action}>
      <S.Image src={imageLink} />
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

export default Button;

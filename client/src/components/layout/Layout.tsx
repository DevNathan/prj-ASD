import React from "react";
import * as S from "./style";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <S.Screen>
      <S.InnerBox>{children}</S.InnerBox>
    </S.Screen>
  );
};

export default Layout;

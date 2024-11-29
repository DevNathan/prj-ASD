import Palette from "@/global/Palette";
import styled from "styled-components";

export const Screen = styled.div`
  max-width: 100dvw;
  max-height: 100dvh;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: ${Palette.primary.m1};
  position: relative;
  overflow: clip;
`;

export const InnerBox = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${Palette.point.p1};
  box-sizing: border-box;
`;

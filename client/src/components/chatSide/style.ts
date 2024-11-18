import styled from "styled-components";
import Palette from "@/global/Palette";

export const Container = styled.div`
  flex: 1;
  background-color: ${Palette.primary.m1};
  height: calc(100dvh - 100px);
  border-radius: 20px;
  overflow: clip;
  display: flex;
  flex-direction: column;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
  padding: 8px;
`;

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow-y: scroll;
  margin: 10px 0;
`;

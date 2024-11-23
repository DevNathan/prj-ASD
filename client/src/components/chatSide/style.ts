import styled, { keyframes } from "styled-components";
import Palette from "@/global/Palette";

const pulseMainAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
`;

const pulseAnimation = keyframes`
    0% {
        transform: scale(1);
        opacity: 0;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
`;

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
  position: relative;
`;

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow-y: scroll;
  margin: 10px 0;
  padding-bottom: 160px;
`;

export const IndicatorSetter = styled.div`
  position: absolute;
  bottom: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MicIndicatorWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);

  & svg {
    animation: ${pulseMainAnimation} 4s infinite;
  }

  &::before {
    content: "";
    position: absolute;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    box-shadow: 0 0 0 1px aqua;
    animation: ${pulseAnimation} 1s infinite;
  }
`;

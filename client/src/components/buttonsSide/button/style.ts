import styled, { keyframes } from "styled-components";
import Palette from "@/global/Palette";

const swingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Button = styled.button`
  width: 100%;
  flex: 1;

  background-color: ${Palette.primary.m1};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  box-shadow: 4px 4px 8px rgba(149, 149, 149, 0.5);

  &:active {
    box-shadow: inset 4px 4px 8px rgba(129, 129, 129, 0.5);

    & > img {
      animation: ${swingAnimation} 0.1s forwards;
    }
  }
`;

export const Image = styled.img`
  width: 100px;
`;

export const Text = styled.span`
  font-size: 3.5em;
  font-weight: bold;
`;

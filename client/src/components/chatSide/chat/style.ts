import styled, { keyframes } from "styled-components";
import Palette from "@/global/Palette";
import { ChatType } from "@/types/ChatType";

const slideUp = (start: string) => keyframes`
    0% {
        transform: translateY(${start});
    }
    100% {
        transform: translateY(0);
    }
`;

export const Wrapper = styled.article.attrs<{ type: ChatType }>((props) => ({
  style: {
    justifyContent: props.type === "BOT" ? "flex-start" : "flex-end",
    paddingLeft: props.type === "BOT" ? "40px" : "0px",
    paddingRight: props.type === "BOT" ? "0px" : "40px",
  },
}))`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
`;

export const TextBox = styled.div`
  flex: 1;
  max-width: 60%;
  border-radius: 12px;
  border: 2px solid rgba(164, 164, 164, 0.25);
  position: relative;
  top: 20px;
  margin-left: 40px;
  padding: 20px;
  background-color: ${Palette.primary.m1};
  overflow: visible;
  animation: ${slideUp("40%")} 0.8s forwards;

  & .tail {
    content: "";
    position: absolute;
    top: 20px;
    right: 100%;
    width: 30px;
    height: 30px;
    background-color: ${Palette.primary.m1};
  }

  &.left {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
    background-color: ${Palette.point.p0};

    & .tail {
      right: 100%;
      transform: translateX(calc(50% - 1px)) rotate(45deg);
      border-left: 2px solid rgba(164, 164, 164, 0.25);
      border-bottom: 2px solid rgba(164, 164, 164, 0.25);
      background-color: ${Palette.point.p0};
    }
  }

  &.right {
    box-shadow: -4px 4px 8px rgba(0, 0, 0, 0.25);
    background-color: #bff2f2;

    & .tail {
      left: 100%;
      transform: translateX(calc(-50% + 1px)) rotate(225deg);
      border-left: 2px solid rgba(164, 164, 164, 0.25);
      border-bottom: 2px solid rgba(164, 164, 164, 0.25);
      background-color: #bff2f2;
    }
  }

  & span {
    font-size: 2rem;
    line-height: 1.4em;
    font-weight: bold;
  }
`;

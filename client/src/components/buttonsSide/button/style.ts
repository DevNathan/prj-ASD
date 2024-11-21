import styled from "styled-components";
import Palette from "@/global/Palette";

export const Button = styled.button`
  width: 100%;
  height: 200px;
  background-color: ${Palette.primary.m1};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 4px;
`;

export const Image = styled.img`
  width: 100px;
`;

export const Text = styled.span`
  font-size: 3.5em;
  font-weight: bold;
`;

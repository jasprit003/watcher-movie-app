import React from "react";
import styled, { keyframes } from "styled-components";

const Logo = () => {
  return <Wrapper>watcher</Wrapper>;
};

const animate = keyframes`
10% {
  transform: translateY(-10px);
s}
  50% {
    transform: scale(1.1);
  }
    100% {
    opacity: .5;
    // transform: rotate(300deg);
    }

`;

const Wrapper = styled.h1`
  font-family: var(--text-logo);
  font-size: 36px;
  color: var(--text-color);
  padding: 12px 16px;
  display: inline-block;
  &::after {
    content: ".";
    display: inline-block;
    color: #ff7547;
    padding-left: 0.2rem;
    animation: ${animate} 1000ms infinite alternate ease-in-out;
    transform-origin: center;
  }
`;

export default Logo;

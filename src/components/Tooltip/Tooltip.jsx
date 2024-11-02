import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
  opacity: .1;
  transform: scale(.5)
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
from {
  opacity: 1;
  transform: rotate(90deg);
}
  to {
  opacity: 0;
  transform: scale(.5);
  }
`;

const Tooltip = ({ children, isOpen }) => {
  return (
    <Wrapper isopen={isOpen}>
      <Span>{children}</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 0;
  right: 0;
  top: -20px;
  transform: translateY(-100%);
  background-color: #27292a;
  padding: 0.5rem;
  border-radius: inherit;
  margin: auto;
  animation: ${(props) => (props.isopen ? fadeIn : fadeOut)} 450ms ease-in;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 8px;
    width: 15px;
    background-color: inherit;
    transform: translateY(calc(100% - 1px));
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  }
`;

const Span = styled.p`
  color: var(--text-color);
  font-size: 0.7rem;
  font-family: "Lufga", sans-serif;
  opacity: 0.7;
  text-align: center;
`;

export default Tooltip;

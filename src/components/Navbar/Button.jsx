import styled from "styled-components";

const Wrapper = styled.button`
  padding: 8px 16px;
  background: none;
  color: var(--secondary-color);
  border: 2px solid;
  border-radius: 1rem;
  margin: 0 8px;
  cursor: pointer;
  font-size: 16px;
  transition: .3s ease-in;

  &:hover {
    transform: scale(.9);
  }
`;
const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;

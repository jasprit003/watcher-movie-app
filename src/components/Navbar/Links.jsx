import styled from "styled-components";

const Wrapper = styled.ul`
  display: inline-flex;
  font-size: 16px;
  color: var(--text-color);
  font-family: helv;
  opacity: 0.7;
`;
const LinkWrapper = styled.a`
  padding: 0 8px;
  color: inherit;
  text-decoration: none;
`;
const ListItem = styled.li``;

const Link = () => {
  return (
    <Wrapper>
      <LinkWrapper href="#">
        <ListItem>Home</ListItem>
      </LinkWrapper>
      <LinkWrapper href="#">
        <ListItem>Services</ListItem>
      </LinkWrapper>
      <LinkWrapper href="#">
        <ListItem>FAQ</ListItem>
      </LinkWrapper>
      <LinkWrapper href="#">
        <ListItem>Contact</ListItem>
      </LinkWrapper>
    </Wrapper>
  );
};

export default Link;

import styled from "styled-components";
import Logo from "./Logo.jsx";
import Link from "./Links.jsx";
import Button from "./Button.jsx";

const Wrapper = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
      {/* <Link />
      <Button>Sign Up</Button> */}
    </Wrapper>
  );
};

export default Navbar;

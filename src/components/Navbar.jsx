import styled from "styled-components";

const Section = styled.div`
  
  width: 100vw;
  height: 50px;
  background-color: back;
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;


const Right = styled.div``;

const Nav = styled.div``;

const Item = styled.a``;

const Logo = styled.div`
  border: 1px black solid;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Logo>
            <h2 className="text-4xl font-light tracking-widest">ESSENTIA</h2>
          </Logo>
        </Left>

        <Right>
          <Nav>
            <Item>HOME</Item>
            <Item>SHOP</Item>
            <Item>CART</Item>
          </Nav>
        </Right>
      </Container>
    </Section>
  );
};

export default Navbar;

import styled from "styled-components";

const Section = styled.div``;

const Container = styled.div``;

const Left = styled.div``;

const Right = styled.div``;

const Nav = styled.div``;

const Item = styled.a``;

const Logo = styled.div`
  
`;

const Top = styled.div`
  height: 5vh;
  position: fixed;
  z-index: 1;
  border-bottom: 3px black solid;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const Menu = styled.div`
  width: 30vw;
  height: 90vh;
  position: fixed;
  right: 4.6vw;
  top: 7vmin;
  border-left: 3px solid black;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Top>
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
        </Top>
        <Menu>

        </Menu>
      </Container>
    </Section>
  );
};

export default Navbar;

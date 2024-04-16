import styled from "styled-components";

const Section = styled.div``;

const Container = styled.div``;

const Left = styled.div``;

const Right = styled.div``;

const Nav = styled.div`
  margin-top: 10px;
`;

const Item = styled.a`
  margin: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
cursor: pointer;
`;

const Top = styled.div`
  height: 50px;
  position: fixed;
  border-bottom: 3px black solid;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 1;
`;

const Menu = styled.div`
  width: 20vw;
  height: 90vmin;
  position: fixed;
  right: 4.6vw;
  top: 60px;
  border-left: 3px solid black;
  z-index: 1;
  background-color: white;
  @media (max-width: 990px) {
    top: 50px;
    height: 95vh;
    width: 90vw;
    transform: translate(120%, 0%);
  }
`;

const Card = styled.div`
padding: 1vmin;
padding-left: 3vmin;
`;

const ItemMenu = styled.div`
  font-size: 25px;
  cursor: pointer;
  font-weight: 600;
  &:hover{
    color:gray;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Left>
            <Logo>
              <h2 className="text-4xl tracking-widest">ESSENTIA</h2>
            </Logo>
          </Left>
          <Right>
            <Nav>
              <Item>SHOP</Item>
              <Item>CART</Item>
            </Nav>
          </Right>
        </Top>
        <Menu>
          <Card>
            <ItemMenu>New Arrivals</ItemMenu>
            <ItemMenu>Tailoring</ItemMenu>
            <ItemMenu>Shirting</ItemMenu>
            <ItemMenu>Footwear</ItemMenu>
            <ItemMenu>Accessories</ItemMenu>
            <ItemMenu>Tessuti</ItemMenu>
          </Card>
        </Menu>
      </Container>
    </Section>
  );
};

export default Navbar;

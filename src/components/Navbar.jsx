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

const Logo = styled.div``;

const Top = styled.div`
  height: 5vh;
  position: fixed;
  border-bottom: 3px black solid;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

const Menu = styled.div`
  width: 20vw;
  height: 90vh;
  position: fixed;
  right: 4.6vw;
  top: 7vmin;
  border-left: 3px solid black;
  z-index: 1;
  background-color: white;
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
              <Item>HOME</Item>
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

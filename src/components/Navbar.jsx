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
    border: 0px;
    text-align: center;
    top: 50px;
    height: 95vh;
    width: 92vw;
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
  &:hover {
    color: gray;
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
              <Item className="max-[990px]:hidden">SHOP</Item>
              <Item className="max-[990px]:hidden">CART</Item>
              <a className="cursor-pointer min-[990px]:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </a>
            </Nav>
          </Right>
        </Top>
        <Menu className="ease-in-out duration-300">
          <Card>
            <ItemMenu className="min-[990px]:hidden">Shop</ItemMenu>
            <ItemMenu className="min-[990px]:hidden mb-[20px]">Cart</ItemMenu>
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

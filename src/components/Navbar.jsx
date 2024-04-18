import { useEffect } from "react";
import { useState } from "react";
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
  margin-top: 4px;
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
  @media (max-width: 990px) {
    border-bottom: 0px black solid;
  }
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
    width: 93vw;
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

const Bar = styled.div`
  overflow-y: hidden;
  height: 50px;
  position: fixed;
  border-bottom: 3px black solid;
  width: 90vw;
  top: 50px;
  display: none;
  z-index: 1;
  background-color: black;
  color: white;
  @media (max-width: 990px) {
    display: inline;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BarItem = styled.div`
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function menu() {
    if (isOpen === true) {
      document.querySelector("#menu").style.transform = "translate(140%, 0%)";
      document.querySelector("#x").style.display = "none";
      document.querySelector("#ham").style.display = "inline";
      setIsOpen(false);
    } else {
      document.querySelector("#menu").style.transform = "translate(2%, 0%)";
      document.querySelector("#ham").style.display = "none";
      document.querySelector("#x").style.display = "inline";
      setIsOpen(true);
    }
  }

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
              <div onClick={menu} className="cursor-pointer min-[991px]:hidden">
                <svg
                  id="x"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-8 hidden"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>

                <svg
                  id="ham"
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
              </div>
            </Nav>
          </Right>
        </Top>
        <Bar className="text-[16px] overflow-x-scroll">
          <div className="ml-[10px] flex mt-[13px] w-[540px] ">
            <BarItem className="mr-[2vw]">New Arrivals</BarItem>
            <BarItem className="mr-[2vw]">Shirting</BarItem>
            <BarItem className="mr-[2vw]">Footwear</BarItem>
            <BarItem className="mr-[2vw]">Tailoring</BarItem>
            <BarItem className="mr-[2vw]">Outwear</BarItem>
            <BarItem className="mr-[2vw]">Denim</BarItem>
          </div>
        </Bar>
        <Menu>
          <Card>
            <ItemMenu className="min-[990px]:hidden">Shop</ItemMenu>
            <ItemMenu className="min-[990px]:hidden mb-[20px]">Cart</ItemMenu>
            <ItemMenu>New Arrivals</ItemMenu>
            <ItemMenu>Shirting</ItemMenu>
            <ItemMenu>Footwear</ItemMenu>
            <ItemMenu>Tailoring</ItemMenu>
            <ItemMenu>Outwear</ItemMenu>
            <ItemMenu>Denim</ItemMenu>
          </Card>
        </Menu>
        <Menu
          className="ease-in-out duration-300 min-[990px]:translate-x-[140%]"
          id="menu"
        >
          <Card>
            <ItemMenu>Shop</ItemMenu>
            <ItemMenu>Cart</ItemMenu>
          </Card>
        </Menu>
      </Container>
    </Section>
  );
};

export default Navbar;

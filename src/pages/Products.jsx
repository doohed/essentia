import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const Section = styled.div`
  margin-top: 60px;
  width: 70vw;
  @media (max-width: 990px) {
    width: 90vw;
  }
`;

const Container = styled.div``;

const Body = styled.div``;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  color: #000000;
`;

const Explore = styled.div``;

const Product = styled.div`
  padding: 10px;
`;

const Logo = styled.div`
  cursor: pointer;
  margin-top: -4px;
`;

const Image = styled.img`
  @media (max-width: 990px) {
    width: 90vw;
  }
  cursor: pointer;
`;

const Holder = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 990px) {
    grid-template-columns: auto auto;
  }
`;

const Products = ({data}) => {

  const formatString=(inputString)=>{
    let outputString = inputString.replace(/ /g, "_").toLowerCase();
    return outputString;
  }

  const handleClick = (item) => {
    
    window.location.assign(`/product/${item.id}/${formatString(item.title)}`);
  };
  return (
    <Section>
      <Container>
        <Body>
          <Holder className=" mt-[70px] max-[990px]:mt-[120px]">
            {data.map((item) => (
              <Product
                data-aos="fade"
                key={`image ` + item.id}
                className=" max-[990px]:w-[auto]"
              >
                <a onClick={()=>{handleClick(item)}} >
                  <Image
                    className=" w-[34vw] h-[40vh] object-cover"
                    src={item.img}
                  />
                </a>
                <Title className=" bottom-0 p-2">
                  <h2 className="text-[15px]">{item.title}</h2>
                  <Explore className="mt-[10px]">
                    <div>{item.price}</div>
                  </Explore>
                </Title>
              </Product>
            ))}
          </Holder>
        </Body>
        <Footer>
          <div className="flex max-[990px]:text-[12px]">
            <div>
              <a className="cursor-pointer mr-[20px] max-[990px]:mr-[5px]">
                Instagram
              </a>
            </div>
            <div>
              <a className="cursor-pointer mr-[20px] max-[990px]:mr-[5px]">
                Terms and Conditions
              </a>
            </div>
            <div>
              <a className="cursor-pointer">Privacy Policy</a>
            </div>
          </div>
          <Logo>
            <a className=" mr-[30px] max-[990px]:mr-[0px] max-[990px]:text-[12px]">
              © 2024 ESSENTIA
            </a>
          </Logo>
        </Footer>
      </Container>
    </Section>
  );
};

export default Products;

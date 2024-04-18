import styled from "styled-components";

const Section = styled.div`
  margin-top: 60px;
  width: 70vw;
  @media (max-width: 990px) {
    width: 90vw;
  }
`;

const Container = styled.div``;

const Landing = styled.div`
  height: 90vh;
`;

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
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <a href="/new">
          <Landing>
            <div className="relative h-[90vmin]">
              <Title className="bg-black absolute bottom-0 p-2">
                <h2 className="text-white">Seasonal Sport Jackets</h2>
                <h1 className="text-white">New Arrivals</h1>
                <Explore>
                  <a className="text-white ease-in-out duration-200" href="">
                    EXPLORE
                  </a>
                </Explore>
              </Title>

              <Image
                className="z-[-1] absolute w-[70vw] h-[90vmin] object-cover max-[990px]:h-[90vh]"
                src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_16099.jpg?v=1712922526&width=1900"
              />
            </div>
          </Landing>
        </a>
        <Body className="mt-[200px]">
          <div className="flex between max-[990px]:inline">
            <Product className="w-[35vw] max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[60vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/WEBUntitled_Session29190_copy_736x.jpg?v=1712318282"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[20px]">Shirting</h2>
                <h1 className="text-gray-700 text-[18px] mt-[10px]">
                  OCBD's, Poplin Shirts & Seasonal Staples.
                </h1>
                <Explore className="mt-[10px]">
                  <a className=" ease-in-out duration-200" href="">
                    EXPLORE
                  </a>
                </Explore>
              </Title>
            </Product>
            <Product className="w-[35vw] max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[60vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/WEBUntitled-Session29190-232_736x.jpg?v=1712318519"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[20px]">Footwear</h2>
                <h1 className="text-gray-700 text-[18px] mt-[10px]">
                  Crockett & Jones for Anglo-Italian, Crepe Sole Desert Boots &
                  Boat Shoes.
                </h1>
                <Explore className="mt-[10px]">
                  <a className=" ease-in-out duration-200" href="">
                    EXPLORE
                  </a>
                </Explore>
              </Title>
            </Product>
          </div>
          <div className="flex mt-[70px] max-[990px]:inline">
            <Product className="w-[35vw] max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[60vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/Look_7_0004-Edit2_549x.jpg?v=1711544138"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[20px]">Tailoring</h2>
                <h1 className="text-gray-700 text-[18px] mt-[10px]">
                  Seasonal Suits, Sports Jackets & Tailored Trousers.
                </h1>
                <Explore className="mt-[10px]">
                  <a className=" ease-in-out duration-200" href="">
                    EXPLORE
                  </a>
                </Explore>
              </Title>
            </Product>
            <Product className="w-[35vw] max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[60vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/Look_5_0004-Edit_44ccbeba-4eb8-4499-8371-30389e06b376_549x.jpg?v=1712322663"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[20px]">Outerwear</h2>
                <h1 className="text-gray-700 text-[18px] mt-[10px]">
                  Wax Jackets, Transitional Bombers & Mid-Weight Windbreakers.
                </h1>
                <Explore className="mt-[10px]">
                  <a className=" ease-in-out duration-200" href="">
                    EXPLORE
                  </a>
                </Explore>
              </Title>
            </Product>
            <Product className="w-[35vw] max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[60vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/Look_3_0005-Edit2_59c35d93-4fc4-45fa-8ab6-2e47c7708e34_549x.jpg?v=1712322730"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[20px]">Denim</h2>
                <h1 className="text-gray-700 text-[18px] mt-[10px]">
                  13oz Selvedge Denim. Unique Fit. Made In Italy.
                </h1>
                <Explore className="mt-[10px]">
                  <a className=" ease-in-out duration-200" href="">
                    EXPLORE
                  </a>
                </Explore>
              </Title>
            </Product>
          </div>
          <div className="relative mt-[100px] content-center">
            <Image
              className=" w-[70vw] object-cover"
              src="https://angloitalian.com/cdn/shop/files/WEBWEBUntitled-Session29990-copy044.jpg?v=1712835074&width=1900"
            />
            <div className="top-[70%] left-[50%] translate-x-[-50%] absolute bottom-0 text-center max-[990px]:top-[-90px]">
              <h2 className="text-[20px]">Weddings</h2>
              <h1 className="text-[18px] mt-[10px]">Community Portraits IV</h1>
            </div>
          </div>
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

export default Hero;

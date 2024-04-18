import styled from "styled-components";

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
`;

const Holder = styled.div`
display: grid;
grid-template-columns: auto auto auto;
@media (max-width: 990px) {
    grid-template-columns: auto auto;
  }

`;

const New = () => {
  return (
    <Section>
      <Container>
        <Body>
          <Holder className=" mt-[70px] max-[990px]:mt-[120px]">
            <Product className=" relative max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[40vh] object-cover "
                src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_16122.jpg?v=1712917693&width=500"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[15px]">
                  Sport Jacket Single Breasted Grey Houndstooth Silk Linen
                </h2>

                <Explore className="mt-[10px]">
                  <div>£916.67</div>
                </Explore>
              </Title>
            </Product>
            <Product className=" max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[40vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_16142.jpg?v=1712917634&width=500"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[15px]">
                  Sport Jacket Cotton Linen Wood Brown
                </h2>

                <Explore className="mt-[10px]">
                  <div>£916.67</div>
                </Explore>
              </Title>
            </Product>
            <Product className=" max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[40vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_161492.jpg?v=1712918751&width=500"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[15px]">
                  Sport Jacket Single Breasted Sand Glen Plaid Emerald Overcheck
                </h2>

                <Explore className="mt-[10px]">
                  <div>£916.67</div>
                </Explore>
              </Title>
            </Product>

            <Product className="relative  max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[40vh] object-cover "
                src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_161122.jpg?v=1712918774&width=500"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[15px]">
                  Sport Jacket Single Breasted Sand Herringbone
                </h2>

                <Explore className="mt-[10px]">
                  <div>£916.67</div>
                </Explore>
              </Title>
            </Product>
            <Product className="max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[40vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_10822_a07f5caa-3596-451b-a9b6-c05aad6a3ddc.jpg?v=1711556884&width=500"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[15px]">
                  Sport Jacket Single Breasted Brown Herringbone Linen
                </h2>

                <Explore className="mt-[10px]">
                  <div>£916.67</div>
                </Explore>
              </Title>
            </Product>
            <Product className=" max-[990px]:w-[auto]">
              <Image
                className=" w-[34vw] h-[40vh] object-cover"
                src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_19243_3.jpg?v=1698692119&width=500"
              />
              <Title className=" bottom-0 p-2">
                <h2 className="text-[15px]">
                  Tailored Trouser Twisted Linen Brown
                </h2>

                <Explore className="mt-[10px]">
                  <div>£270.89</div>
                </Explore>
              </Title>
            </Product>
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

export default New;

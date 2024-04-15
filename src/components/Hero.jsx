import styled from "styled-components";

const Section = styled.div`
  margin-top: 7vh;
  width: 80vw;
`;

const Container = styled.div`
  height: 200vh;
`;

const Landing = styled.div`
  height: 90vh;
`;

const Body = styled.div``;

const Contact = styled.div``;

const Title = styled.div`
  color: #000000;
`;

const Explore = styled.div``;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Landing>
          <div className="relative h-[90vh]">
            <Title className="bg-black absolute bottom-0 p-2">
              <h2 className="text-white">Seasonal Sport Jackets</h2>
              <h1 className="text-white">New Arrivals</h1>
              <Explore>
                <a className="text-white ease-in-out duration-200" href="">
                  EXPLORE
                </a>
              </Explore>
            </Title>

            <img
              className="z-[-1] absolute w-[70vw] h-[89.9vh] object-cover"
              src="https://angloitalian.com/cdn/shop/files/Anglo-Italian_16099.jpg?v=1712922526&width=1900"
            />
          </div>
        </Landing>
        <Body></Body>
        <Contact></Contact>
      </Container>
    </Section>
  );
};

export default Hero;

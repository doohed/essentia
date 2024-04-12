import styled from "styled-components";

const Section = styled.div`
  margin-top: 7vh;
  width: 60vw;
`;

const Container = styled.div``;

const Landing = styled.div`
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
          <div className="relative h-[100vh]">
            <img
              className=" z-[-1] w-[80vmin]  left-[5vw] mt-5 object-cover"
              src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Title className="bg-gray-200 w-[80vmin] h-[100px] p-2">
              <h2>Elevate Spaces</h2>
              <h1>Art in Simplicity</h1>
            </Title>
            <Explore>
              <a className="ease-in-out duration-200" href="">
                EXPLORE
              </a>
            </Explore>
          </div>
        </Landing>
        <Body></Body>
        <Contact></Contact>
      </Container>
    </Section>
  );
};

export default Hero;

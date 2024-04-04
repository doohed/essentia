import styled from "styled-components";

const Section = styled.div``;

const Container = styled.div`
  width: 100vw;
`;

const Landing = styled.div``;

const Body = styled.div``;

const Contact = styled.div``;

const Title = styled.div`
  color: #ffffff;
  
  filter: invert(1);
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Landing>
          <div className="relative h-[100vh]">
            <img
              className="absolute z-[-1] h-[30vh] left-[10vw] object-cover"
              src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Title>
              <h2>Elevate Spaces</h2>
              <h1>Art in Simplicity</h1>
            </Title>
          </div>
        </Landing>
        <Body></Body>
        <Contact></Contact>
      </Container>
    </Section>
  );
};

export default Hero;

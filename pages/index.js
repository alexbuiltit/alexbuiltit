import Heading from "../components/Heading";
import styled from "styled-components";

const ContentContainer = styled.section`
  display: block;
  width: 100%;
  max-width: 800px;
  margin: auto;
  margin-top: 50px;
`;

const Index = () => {
  return (
    <>
      <ContentContainer>
        <Heading level={1}>Hello, I'm Alex.</Heading>
        <p>
          I'm a Front End Engineer building Progressive Web Apps using{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>{" "}
          &amp;{" "}
          <a
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            styled-components
          </a>
          .
        </p>
        <p>
          I have a particular interest in accessibility and inclusivity in web,
          I currently work at{" "}
          <a
            href="https://zengenti.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zengenti
          </a>
          .
        </p>
        <p>
          You can find me on{" "}
          <a
            href="https://twitter.com/alexbuiltit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://github.com/alexbuiltit"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          &amp;{" "}
          <a
            href="https://www.linkedin.com/in/alexjamesturner/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </ContentContainer>
    </>
  );
};

export default Index;

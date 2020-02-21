import Navbar from "../navbar";
import Footer from "../footer";
import HireMe from "../hireMe";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
  }

  p {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default props => (
  <>
    <GlobalStyle />
    <Navbar />
    {props.children}
    <HireMe />
    <Footer />
  </>
)
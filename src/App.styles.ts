import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
    background-color: #18081c;
    color: #fff;
    min-height: 100vh;
    width: 100%;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    text-align: center;
    border-bottom: 1px solid #bb93c6;
    padding-bottom: 20px;
    text-transform: uppercase;
`;
import styled, { createGlobalStyle } from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 5;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AppStyled = styled.div`
  font-family: "Raleway", sans-serif;
  height: 100vh;
  padding-top: 25px;
  display: flex;
  justify-content: center;
  > div {
    width: calc(100vw - 50px);
    max-width: 326px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GlobalStyle = createGlobalStyle`
    :root {
      --base: #191724;
      --surface: #1f1d2e;
      --overlay: #26233a;
      --inactive: #555169;
      --subtle: #6e6a86;
      --text: #e0def4;
      --love: #eb6f92;
      --gold: #f6c177;
      --rose: #ebbcba;
      --pine: #31748f;
      --foam: #9ccfd8;
      --iris: #c4a7e7;
      --highlight: #2a2837;
      --highlightInactive: #211f2d;
      --highlightOverlay: #3a384a;

    background-color: var(--base);
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        text-decoration: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

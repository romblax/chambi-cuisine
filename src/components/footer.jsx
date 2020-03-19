import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  z-index: -1;
`;

const Footer = ({ className, height }) => (
  <FooterWrapper className={className} height={height}>
    gros footer maggle
  </FooterWrapper>
);

export default Footer;

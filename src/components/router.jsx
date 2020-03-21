import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Recipe from "components/recipe.jsx";
import Home from "components/home.jsx";

const RevealFooter = styled.div`
  height: ${({ theme }) => theme.footerHeight};
  background-color: transparent;
  scroll-snap-align: start;
`;

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.headerHeight});
  z-index: 0;
  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const SnapContent = styled.div`
  scroll-snap-align: start;
  min-height: 100%;
  background-color: white;
`;

const AppRouter = ({ className }) => (
  <Container className={className}>
    <Switch>
      <Route path="/recipes/:id" exact>
        <Recipe />
      </Route>
      <Route path="/">
        <SnapContent>
          <Home />
        </SnapContent>
      </Route>
    </Switch>
    <RevealFooter />
  </Container>
);

export default AppRouter;

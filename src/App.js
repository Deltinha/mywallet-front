import "./reset.css";
import "./fonts.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import styled from "styled-components";

function App() {
  return (
    <AppStyled>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
          
          </Route>

          <Route exact path='/sign-up'>
            <SignUp />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  background-color: #8C11BE;
  font-family: 'Raleway', sans-serif;
`;

export default App;

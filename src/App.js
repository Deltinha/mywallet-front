import "./fonts.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Report from "./screens/Report";
import { AppStyled, GlobalStyle } from "./style";
import AddEntry from "./screens/AddEntry";

function App() {
  return (
    <AppStyled>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <LogIn />
          </Route>

          <Route exact path='/sign-up'>
            <SignUp />
          </Route>

          <Route exact path='/report'>
            <Report />
          </Route>

          <Route exact path='/add-incoming'>
            <AddEntry />
          </Route>

          <Route exact path='/add-expense'>
            <AddEntry />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </AppStyled>
  );
}

export default App;

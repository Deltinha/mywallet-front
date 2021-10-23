import "./fonts.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Report from "./screens/Report";
import { GlobalStyle } from "./style";

function App() {
  return (
    <>
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
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

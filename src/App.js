import "./fonts.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Report from "./screens/Report";
import { AppStyled, GlobalStyle, ModalBackground } from "./style";
import AddEntry from "./screens/AddEntry";
import { ModalProvider } from "styled-react-modal";
import { useState } from "react";

function App() {

  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const userData = localStorage.getItem('userData')
  if (userData) {
      setToken = JSON.parse(userData).token;
      setName = JSON.parse(userData).token;
  }

  return (
    <ModalProvider backgroundComponent={ModalBackground}>
      <AppStyled>
        <GlobalStyle />
          
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <LogIn token={token}/>
                </Route>

                <Route exact path='/sign-up'>
                  <SignUp />
                </Route>

                <Route exact path='/report'>
                  <Report token={token} name={name}/>
                </Route>

                <Route exact path='/add-incoming'>
                  <AddEntry token={token}/>
                </Route>

                <Route exact path='/add-expense'>
                  <AddEntry token={token}/>
                </Route>
                
              </Switch>
            </BrowserRouter>
      </AppStyled>
    </ModalProvider>
  );
}

export default App;

import "./fonts.css";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Report from "./screens/Report";
import { AppStyled, GlobalStyle, ModalBackground } from "./style";
import AddEntry from "./screens/AddEntry";
import { ModalProvider } from "styled-react-modal";
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  function handleLogout(){
    localStorage.clear();
    setUserData({});

  }

  
  useEffect(()=>{
    const loggedInUserData = localStorage.getItem('userData');
    if (loggedInUserData) {
      setUserData(JSON.parse(loggedInUserData))
    }
  },[])

  return (
    <ModalProvider backgroundComponent={ModalBackground}>
      <AppStyled>
        <GlobalStyle />
          
            <BrowserRouter>
              <Switch>
                <Route exact path='/'>
                  <LogIn userData={userData} setUserData={setUserData}/>
                </Route>

                <Route exact path='/sign-up'>
                  <SignUp handleLogout={handleLogout}/>
                </Route>

                <Route exact path='/report'>
                  <Report userData={userData}/>
                </Route>

                <Route exact path='/add-incoming'>
                  <AddEntry userData={userData}/>
                </Route>

                <Route exact path='/add-expense'>
                  <AddEntry userData={userData}/>
                </Route>
                
              </Switch>
            </BrowserRouter>
      </AppStyled>
    </ModalProvider>
  );
}

export default App;

import "./fonts.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import LogIn from "./screens/LogIn";
import Report from "./screens/Report";
import { AppStyled, GlobalStyle, ModalBackground } from "./style";
import AddEntry from "./screens/AddEntry";
import { ModalProvider } from "styled-react-modal";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import { postLogout } from "./services/mywallet-api";

function App() {
  const [userData, setUserData] = useState({});

  function handleLogout() {
    localStorage.clear();
    if (userData) {
      postLogout(userData.token);
    }
    setUserData({});
  }

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("userData");
    if (loggedInUserData) {
      setUserData(JSON.parse(loggedInUserData));
    }
  }, []);

  return (
    <ModalProvider backgroundComponent={ModalBackground}>
      <AppStyled>
        <GlobalStyle />

        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LogIn userData={userData} setUserData={setUserData} />
            </Route>
            <UserContext.Provider value={{ handleLogout }}>
              <Route exact path="/sign-up">
                <SignUp />
              </Route>

              <Route exact path="/report">
                <Report userData={userData} />
              </Route>

              <Route exact path="/add-incoming">
                <AddEntry userData={userData} />
              </Route>

              <Route exact path="/add-expense">
                <AddEntry userData={userData} />
              </Route>
            </UserContext.Provider>
          </Switch>
        </BrowserRouter>
      </AppStyled>
    </ModalProvider>
  );
}

export default App;

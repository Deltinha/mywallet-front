import './fonts.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import Report from './screens/Report';
import { AppStyled, GlobalStyle, ModalBackground } from './style';
import AddEntry from './screens/AddEntry';
import { ModalProvider } from 'styled-react-modal';
import { useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
import { postLogout } from './services/mywallet-api';
import useLocalStorage from './hooks/useLocalStorage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [userData, setUserData] = useLocalStorage('@mywallet-user', {});

  function handleLogout() {
    localStorage.clear();
    postLogout(userData.token);
    setUserData({});
  }

  useEffect(() => {
    const loggedInUserData = localStorage.getItem('userData');
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
                <ProtectedRoute userData={userData}>
                  <Report userData={userData} />
                </ProtectedRoute>
              </Route>

              <Route exact path="/add-incoming">
                <ProtectedRoute userData={userData}>
                  <AddEntry userData={userData} />
                </ProtectedRoute>
              </Route>

              <Route exact path="/add-expense">
                <ProtectedRoute userData={userData}>
                  <AddEntry userData={userData} />
                </ProtectedRoute>
              </Route>
            </UserContext.Provider>
          </Switch>
        </BrowserRouter>
      </AppStyled>
    </ModalProvider>
  );
}

export default App;

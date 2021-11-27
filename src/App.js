import './styles/fonts.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import Report from './screens/Report';
import { GlobalStyle } from './styles/GlobalStyle';
import AddEntry from './screens/AddEntry';
import { useEffect } from 'react';
import { postLogout } from './services/mywallet-api';
import useLocalStorage from './hooks/useLocalStorage';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  const [userData, setUserData] = useLocalStorage('@mywallet-user', {});

  function handleLogout() {
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LogIn userData={userData} setUserData={setUserData} />
          </Route>
          <Route exact path="/sign-up">
            <SignUp handleLogout={handleLogout} />
          </Route>

          <Route exact path="/report">
            <ProtectedRoute userData={userData}>
              <Report userData={userData} handleLogout={handleLogout} />
            </ProtectedRoute>
          </Route>

          <Route exact path="/add-incoming">
            <ProtectedRoute userData={userData}>
              <AddEntry userData={userData} handleLogout={handleLogout} />
            </ProtectedRoute>
          </Route>

          <Route exact path="/add-expense">
            <ProtectedRoute userData={userData}>
              <AddEntry userData={userData} handleLogout={handleLogout} />
            </ProtectedRoute>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

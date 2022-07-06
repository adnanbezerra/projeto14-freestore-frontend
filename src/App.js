import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './Components/contexts/UserContext';
import GlobalStyle from './Components/styles/GlobalStyle';
import LoginScreen from './Components/LoginScreen';
import HomeScreen from './Components/HomeScreen';

function App() {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>

      <GlobalStyle />

      <BrowserRouter>

        <Routes>
          <Route path={'/'} element={<HomeScreen />} />
          <Route path={'/login'} element={<LoginScreen />} />
        </Routes>

      </BrowserRouter>

    </UserContext.Provider>
  );
}

export default App;

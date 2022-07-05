import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './Components/contexts/UserContext';
import GlobalStyle from './Components/styles/GlobalStyle';
import TelaLogin from './Components/TelaLogin';

function App() {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>

      <GlobalStyle />

      <BrowserRouter>

        <Routes>
          <Route path={'/'} element={<TelaLogin />} />
        </Routes>

      </BrowserRouter>

    </UserContext.Provider>
  );
}

export default App;

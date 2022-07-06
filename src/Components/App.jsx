import GlobalStyle from './assets/styles/GlobalStyle';
import { UserProvider } from './contexts/UserContext';
import Router from './Routes';

export default function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Router />
    </UserProvider>
  )
}

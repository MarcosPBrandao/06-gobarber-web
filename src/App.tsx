import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';

//import Routes from './routes';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
  // <>
  //   <GlobalStyle />
  //   <Router>
  //     <Routes />
  //   </Router>
  // </>
);

export default App;

import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';

//import Routes from './routes';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
    <SignIn />
    </AppProvider>

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

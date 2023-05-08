import React from 'react'
import "./App.css"
import Test from "./app-1/Test";
import App2Main from './app-2/App2Main';
import App3Main from './app-3/App3Main';
import App4Main from './app-4/App4Main';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate
// } from "react-router-dom";

import { Route, Navigate, Routes } from 'react-router-dom';


function App() {

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();

      window.deferredPrompt = event;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);


  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/app-1" replace />} />
          <Route exact path="/app-1" element={<Test />} />
          <Route exact path="/app-2" element={<App2Main />} />
          <Route exact path="/app-3" element={<App3Main />} />
          <Route exact path="/app-4" element={<App4Main />} />
        </Routes>
      </Router> */}

        <Routes>
          <Route path="*" element={<Navigate to="/app-1" replace />} />
          <Route exact path="/app-1" element={<Test />} />
          <Route exact path="/app-2" element={<App2Main />} />
          <Route exact path="/app-3" element={<App3Main />} />
          <Route exact path="/app-4" element={<App4Main />} />
        </Routes>
    </>

  );
}

export default App;

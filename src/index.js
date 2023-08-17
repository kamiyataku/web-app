import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Company from "./pages/Company"
import {Route,BrowserRouter,Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <BrowserRouter> */}
    <App/>
  {/* </BrowserRouter> */}
    <Home/>
  </>
);

// function AppRouter() {
//   return (
//       <Routes>
//         <Route exact path="/Home"  element={<Home />}/>
//         <Route path="/pages/Company/*" element={<Company />} />
//       </Routes>
//   );
// }

// export default AppRouter;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

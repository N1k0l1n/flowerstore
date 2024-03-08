import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Routers from './compoents/Routers';


function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routers/>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;

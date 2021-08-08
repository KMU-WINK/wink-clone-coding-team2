import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { TestPage } from './pages/TestPage';
import {ResultPage} from "./pages/ResultPage";

function App() {

    return (
      <div>
          <Router>
              <Route exact path={"/"} component={MainPage}/>
              <Route exact path={"/Test"} component={TestPage}/>
              <Route exact path={"/Test/Result"} component={ResultPage}/>
          </Router>
      </div>
    )

}
export default App;

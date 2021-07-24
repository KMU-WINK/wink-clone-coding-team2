import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { TestPage } from './pages/TestPage';


function App() {

    return (
      <div>
          <Router>
              <Route exact path={"/"} component={MainPage}/>
              <Route exact path={"/Test"} component={TestPage}/>
          </Router>
      </div>
    )

}
export default App;

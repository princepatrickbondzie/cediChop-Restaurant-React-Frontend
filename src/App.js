import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./container/home";
import Slider from "./components/header/Slider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/h" component={Slider} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Allocation from "./pages/Allocation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Pitch from "./pages/Pitch";
import Squads from "./pages/Squads";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pitch" component={Pitch} />
      <Route path="/squads" component={Squads} />
      <Route path="/allocation" component={Allocation} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default App;

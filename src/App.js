import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Pitch from "./pages/Pitch";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pitch" component={Pitch} />
    </Switch>
  );
};

export default App;

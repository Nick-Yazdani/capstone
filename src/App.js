import { Switch, Route } from "react-router-dom";

import AllocateAbout from "./pages/allocate/AllocateAbout";
import Allocation from "./pages/allocate/Allocation";
import AllocateHome from "./pages/allocate/AllocateHome";
import AllocateLogin from "./pages/allocate/AllocateLogin";
import Pitch from "./pages/allocate/Pitch";
import AllocateRegister from "./pages/allocate/AllocateRegister";
import Squads from "./pages/allocate/Squads";

import PortfolioHome from "./pages/portfolio/PortfolioHome";

const allocateBase = "/capstone_allocate"
const portfolioBase ="/capstone_portfolio"

const App = () => {
  return (
    <Switch>
      <Route exact path={`${allocateBase}`} component={AllocateHome} />
      <Route path={`${allocateBase}/pitch`} component={Pitch} />
      <Route path={`${allocateBase}/squads`} component={Squads} />
      <Route path={`${allocateBase}/allocation`} component={Allocation} />
      <Route path={`${allocateBase}/about`} component={AllocateAbout} />
      <Route path={`${allocateBase}/login`} component={AllocateLogin} />
      <Route path={`${allocateBase}/register`} component={AllocateRegister} />
      <Route path={`${portfolioBase}`} component={PortfolioHome} />
    </Switch>
  );
};

export default App;

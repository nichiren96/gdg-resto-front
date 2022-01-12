import "./App.css";
import { HomePage } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PreviewPage } from "./pages/Preview";
import { MobileClientPage } from "./pages/Mobile/Client";
import { MobileWaiterPage } from "./pages/Mobile/Waiter";
import { CommandListPage } from "./pages/Mobile/Waiter/CommandList";
import { MainLayout } from "./layouts/main_layout";

// ROUTING

function App() {
  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/" component={HomePage} exact />
          <Route path="/preview" component={PreviewPage} />
          <Route path="/client" component={MobileClientPage} />
          <Route path="/waiter" component={MobileWaiterPage} />
          <Route path="/command/:id" component={CommandListPage} />
        </MainLayout>
      </Switch>
    </Router>
  );
}

export default App;

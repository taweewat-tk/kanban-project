import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Pokemon from "./pages/Pokemon/index";

const Router: FC = () => {
  // return;
  return (
    <Switch>
      <Route exact path="/" component={Pokemon} />
    </Switch>
  );
};

export default Router;

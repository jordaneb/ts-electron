import React, { Dispatch } from "react";
import {
  connect,
  MapDispatchToProps,
  MapDispatchToPropsParam,
} from "react-redux";
import { Route } from "./types";
import { StoreState } from "../store/types";
import { routerActions } from "./state";

interface StateProps {
  currentRoute: Route;
}

interface DispatchProps {
  changeRoute: typeof routerActions.changeRoute;
}

type Props = DispatchProps & StateProps;

export class Router extends React.PureComponent<Props> {
  private goToAbout = () => {
    this.props.changeRoute({ newRoute: "about" });
  };

  public render() {
    return (
      <div>
        <h1>The current page is: {this.props.currentRoute}</h1>
        <button onClick={this.goToAbout}>Change to about</button>
      </div>
    );
  }
}

function getStateProps(state: StoreState): StateProps {
  return {
    currentRoute: state.router.currentRoute,
  };
}

export default connect(getStateProps, {
  changeRoute: routerActions.changeRoute,
})(Router);

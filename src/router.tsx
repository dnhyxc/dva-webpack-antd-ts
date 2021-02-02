import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import { RoutesConfig } from '@/config/routers';
import App from './routes/app';

const { ConnectedRouter } = routerRedux;

interface IRoutersProps {
  history: any;
  app: any;
}

const Routers: React.FC<IRoutersProps> = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/app/home" />} />
          <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
          <Route exact path="/app/index" render={() => <Redirect to="/app/home" />} />
          {
            RoutesConfig.map(({ path, exact, ...dynamics }: any, key) => (
              <Route
                key={key}
                exact={exact !== false}
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                }) as any}
              />
            ))
          }
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
};

export default Routers;

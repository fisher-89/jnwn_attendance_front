import React from 'react';
import {
  routerRedux, Switch, Route
} from 'dva/router';
import dynamic from 'dva/dynamic'

import menuGlobal, { aouthPath } from './common/routers'
import Authority from './routes/Authority';
import { modelNotExisted } from './utils/util'

const {
  ConnectedRouter,
} = routerRedux;


function RouterConfig({ history, app }) {
  const renderRouters = (routers) =>
    aouthPath.map(({ path, models, authority, ...dynamics, }, index) => {
      models.forEach((model) => {
        if (modelNotExisted(app, model)) {
          app.model(require(`./models/${model}`).default);
        }
      });
      return (
        <Route
          key={index}
          path={path}
          exact
          component={dynamic({
            app,
            authority,
            ...dynamics
          })}
        />
      )
    })
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {renderRouters(aouthPath)}
        <Authority routers={menuGlobal} app={app} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
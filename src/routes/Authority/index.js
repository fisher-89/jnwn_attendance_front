import React, { Component } from 'react';
import {
  Route, Switch, Redirect
} from 'dva/router';
import dynamic from 'dva/dynamic'
import App from '../../App'
import { isAuthed, modelNotExisted } from '../../utils/util'
import { connect } from 'dva';

@connect()
class Authority extends Component {
  componentDidMount() {
    const Info = localStorage.getItem('OA_UserInfo');
    if (!Info || Info === 'undefined') {
      this.props.dispatch({
        type: 'app/getUserInfo',
      });
    }
  }

  filterAuthority = () => {
    const { routers } = this.props;
    const authorityRouters = routers.filter(router => isAuthed(router.path));
    return authorityRouters;
  }

  render() {
    const { app, location: { pathname } } = this.props;
    const authorityRouters = this.filterAuthority();
    const error = dynamic({
      app,
      component: () =>
        import('../Error/404'),
    });
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (<Redirect to="/home" />)}
        />
        {
          authorityRouters.map(({ path, models, authority, ...dynamics, }, index) => {
            models.forEach((model) => {
              if (modelNotExisted(app, model)) {
                app.model(require(`../../models/${model}`).default);
              }
            });
            return (
              // <QueueAnim type={['left', 'right']}>
              //   <div className="container" key={pathname}>
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
              //   </div>
              // </QueueAnim>
            )
          })
        }

        <Route component={error} />
      </Switch>
    );
  }
}

export default Authority
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  UsersList as UsersListView,
  TarefaList as TarefaListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={TarefaListView}
        exact
        layout={MainLayout}
        path="/tarefas"
      />
      <RouteWithLayout
        component={UsersListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;

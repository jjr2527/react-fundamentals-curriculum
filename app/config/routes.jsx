var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main.jsx');
var Home = require("../components/Home.jsx");
var PromptContainer = require('../containers/PromptContainer.jsx');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='employeeOne' header='Employee One' component={PromptContainer} />
      <Route path='employeeTwo/:employeeOne' header='Employee Two' component={PromptContainer} />
    </Route>
  </Router>
);

module.exports = routes;
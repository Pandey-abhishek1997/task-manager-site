import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import Signup from './components/Signup';
import Todo from './components/Todo';


const rootElement = document.getElementById('root');
ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={LoginComponent} />
			<Route exact path="/login" component={LoginComponent} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/todo" component={Todo} />
		</Switch>
	</Router>, rootElement
);


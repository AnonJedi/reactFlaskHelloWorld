const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const Login = React.createClass({
	render() {
		<div>
			<div className="landing">
				<h1>KV</h1>
			</div>
			<div className="linput-forms">
				<form className="linput-forms__login" name="login" action="/login">
					<input type="text" maxlength="30" placeholder="username" required>
					<input type="password" placeholder="password" required>
					<input type="submit" value="Login">
				</form>
			</div>
		</div>
	}
});
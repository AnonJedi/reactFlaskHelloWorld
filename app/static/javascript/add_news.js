const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const AddNews = React.createClass({
 	getInitialState() {
		return {
			agreeNotChecked: true,
			authorIsEmpty: true,
    		textIsEmpty: true
		};
	},
	onFieldChange(fieldName, e) {
		if (e.target.value.trim().length > 0) {
			this.setState({['' + fieldName]: false})
		} else {
			this.setState({['' + fieldName]: true})
		}
	},
	onClickHandler(e) {
		e.preventDefault();
	    var author = ReactDOM.findDOMNode(this.refs.author).value;
	    var textEl = ReactDOM.findDOMNode(this.refs.text);
	    text = textEl.value;
	    news = {
	    	author: author,
	    	text: text,
	    	bigText: '...'
	    };
	    $(document).trigger('News.add', news);
	    this.setState({textIsEmpty: true});
	    textEl.value = '';
	},
	componentDidMount() {
	    ReactDOM.findDOMNode(this.refs.author).focus();
	},
	onCheckRuleClick(e) {
	  	this.setState({agreeNotChecked: !this.state.agreeNotChecked});
	},
	render() {
		var input = <input
				className="add__author"
				placeholder="Enter value"
				defaultValue=""
				ref="author"
				type="text"
				onChange={this.onFieldChange.bind(this, 'authorIsEmpty')} />,
			button = <button
				onClick={this.onClickHandler}
				className="add__btn"
				ref="alert_button"
				disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}>
			    Test</button>,
			textarea = <textarea
				className="add__text"
				defaultValue=""
				placeholder="News text"
				ref="text"
				onChange={this.onFieldChange.bind(this, 'textIsEmpty')} />,
			checkbox = <input
				type="checkbox"
				defaultChecked={false}
				ref="checkrule"
				onChange={this.onCheckRuleClick} />,
			label = <label className="add__checkrule">{checkbox}</label>,
			form = <form className="add cf">{input}{textarea}{label}{button}</form>;
		return <div>{form}</div>;
	}
});

module.exports = AddNews;
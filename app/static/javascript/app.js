var React = require('react');
var ReactDOM = require('react-dom');

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

var news = React.createClass({
	getInitialState: function() {
		return {
			visible: false
		}
	},
	readmoreClick: function(e) {
	    e.preventDefault();
	    this.setState({visible: true});
	},	
	render: function() {
		var data = this.props.data;
		var visible = this.state;
		var newsTemplate;
		if (data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				var author = React.createElement('p', {'className': 'news_author'}, item.author + ':');
				var news = React.createElement('p', {'className': 'news_text'}, item.text);
				var bigText = React.createElement('p', {
					'className': 'big_text ' + visible ? 'none' : ''
				}, item.bigText);
				var link = React.createElement('a', {
					'href': '#', 
					'className': 'news_readmore ' + visible ? '' : 'none',
					'onClick': this.readmoreClick
				}, 'more');
				return React.createElement('div', {'className': 'article', 'key': index}, author, news, link, bigText);
			});
			var newsCount = React.createElement('strong', {'className': 'news_count'}, 'count: ' + data.length);
		} else {
			var newsCount = React.createElement('p', null, 'No news');
		}
		
		return React.createElement('div', {
			'className': 'news',
			'ref': 'news'
		}, newsTemplate, newsCount);
	}
});

var inputClass = React.createClass({
	getInitialState: function() {
		return {
			agreeNotChecked: true,
			authorIsEmpty: true,
    		textIsEmpty: true
		};
	},
	onFieldChange: function(fieldName, e) {
		if (e.target.value.trim().length > 0) {
			this.setState({['' + fieldName]: false})
		} else {
			this.setState({['' + fieldName]: true})
		}
	},
	onCliclHandler: function(e) {
		e.preventDefault();
	    var author = ReactDOM.findDOMNode(this.refs.author).value;
	    var textEl = ReactDOM.findDOMNode(this.refs.text);
	    text = textEl.value;
	    news = {
	    	author: author,
	    	text: text,
	    	bigText: '...'
	    }
	    $(document).trigger('News.add', news);
	    this.setState({textIsEmpty: true});
	    textEl.value = '';
	},
	componentDidMount: function() { 
	    ReactDOM.findDOMNode(this.refs.author).focus();
	},
	onCheckRuleClick: function(e) {
	  	this.setState({agreeNotChecked: !this.state.agreeNotChecked});
	},
	render: function() {
		var input = React.createElement('input', {
				'className': 'add__author',
				'placeholder': 'Enter value',
				'defaultValue': '',
				'ref': 'author',
				'type': 'text',
				'onChange': this.onFieldChange.bind(this, 'authorIsEmpty')
			}),
			button = React.createElement('button', {
				'onClick': this.onCliclHandler,
				'className': 'add__btn',
				'ref': 'alert_button',
				'disabled': this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty
			}, 'Test'),
			textarea = React.createElement('textarea', {
				'className': 'add__text',
				'defaultValue': '',
				'placeholder': 'News text',
				'ref': 'text',
				'onChange': this.onFieldChange.bind(this, 'textIsEmpty')
			}),
			checkbox = React.createElement('input', {
				'type': 'checkbox',
				'defaultChecked': false,
				'ref': 'checkrule',
				'onChange': this.onCheckRuleClick
			}),
			label = React.createElement('label', {'className': 'add__checkrule'}, checkbox),
			form = React.createElement('form', {'className': 'add cf'}, input, textarea, label, button);
		return React.createElement('div', null, form);
	}
});

var appClass = React.createClass({
	getInitialState: function() {
		return {
			news: my_news
		};
	},
	componentDidMount: function(){
		var that = this;
		$(document).on('News.add', function(e, news) {
			var oldNews = that.state.news;
			oldNews.push(news);
			that.setState({news:oldNews});
			alert('+1');
		});
	},
	componentWillUnmount: function(){
		$(document).unbind('News.add');
	},
	render: function() {
		var add = React.createElement(inputClass);
		var newsElement = React.createElement(news, {'data': this.state.news});
		var title = React.createElement('h3', null, 'News');
		return React.createElement('div', {'className': 'app'}, add, title, newsElement);
	}
});




var app = React.createElement(appClass);

ReactDOM.render(
	app,
	document.getElementById('element')
);
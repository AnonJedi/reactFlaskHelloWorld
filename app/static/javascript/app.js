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
	getInitialStat: function() {
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
		
		return React.createElement('div', {'className': 'news'}, newsTemplate, newsCount);
	}
});

var inputClass = React.createClass({
	onCliclHandler: function(e) {
		alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
	},
	componentDidMount: function() { 
	    ReactDOM.findDOMNode(this.refs.myTestInput).focus();
	},
	render: function() {
		var input = React.createElement('input', {
			'className': 'test-input',
			'placeholder': 'Enter value',
			'defaultValue': '',
			'ref': 'myTestInput'
		}),
			button = React.createElement('button',
				{'onClick': this.onCliclHandler}, 'Test');
		return React.createElement('div', null, input, button);
	}
});

var input = React.createElement(inputClass);

var newsElement = React.createElement(news, {'data': my_news});
var title = React.createElement('h3', null, 'News');

var app = React.createElement('div', {'className': 'app'}, title, input, newsElement);

ReactDOM.render(
	app,
	document.getElementById('element')
);
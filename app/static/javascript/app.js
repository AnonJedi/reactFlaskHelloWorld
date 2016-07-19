var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var News = require('./news');
var AddNews = require('./add_news');


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

var AppClass = React.createClass({
	getInitialState: function() {
		return {
			news: my_news
		};
	},
	componentDidMount: function(){
		var that = this;
		$(document).on('News.add', function(e, newNews) {
			var news = that.state.news;
			news.push(newNews);
			that.setState({news:news});
		});
	},
	componentWillUnmount: function(){
		$(document).unbind('News.add');
	},
	logoutBtnHandler: function () {
		$.post('/logout', function (data) {
			if (JSON.parse(data)['success']) {
				window.location.pathname = "/entry";
			}
		});
	},
	render: function() {
		return <div className="app">
			<AddNews />
			<h3>News</h3>
			<News data={this.state.news} />
			<button className="logout_button" onClick={this.logoutBtnHandler}>Logout</button>
		</div>;
	}
});

ReactDOM.render(
	<AppClass />,
	document.getElementById('profile')
);
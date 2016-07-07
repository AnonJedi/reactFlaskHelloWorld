var React = require('react');

var Article = require('./article');

class News extends React.createClass {
	render() {
		var data = this.props.data;
		var newsTemplate, newsCount;
		if (data.length > 0) {
			newsTemplate = data.map(function (item, index) {
				return <div key={index}>
					<Article data={item}/>
				</div>
			});
			newsCount = <strong
				className="news_count">{"count: " + data.length}</strong>;
		} else {
			newsCount = <p>No news</p>;
		}

		return <div
			className="news"
			ref="news">
			{newsTemplate}
			{newsCount}
		</div>
	}
}

module.exports = News;

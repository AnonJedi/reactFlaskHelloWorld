const React = require('react');

class Article extends React.createClass{
	getInitialState() {
		return {
			visible: true
		};
	};
	readmoreClick(e) {
	    e.preventDefault();
	    this.setState({visible: false});
	};
	render() {
		var data = this.props.data;
		var visible = this.state.visible;
		return <div className="article">
			<p className="news_author">{data.author + ':'}</p>
			<p className="news_text">{data.text}</p>
			<a className={"news_readmore " + (visible ? "" : "none")}
			   href="#"
			   onClick={this.readmoreClick}>more</a>
			<p className={"big_text " + (visible ? "none" : "")}>{data.bigText}</p>
		</div>;
	};
}

module.exports = Article;
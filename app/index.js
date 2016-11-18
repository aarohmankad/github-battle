var
	React = require('react'),
	ReactDOM = require('react-dom');

var FriendsContainer = React.createClass({
	render: function() {
		var name = this.props.name;
		var friends = ['Cristian', 'Elijah', 'Sean', 'Alex', 'Peter'];

		return (
			<div class='container'>
				<h1> Hey {this.props.name}! </h1>
				<ShowList elements={friends} />
			</div>
		)
	}
});

var ShowList = React.createClass({
	render: function() {
		var elements = this.props.elements.map(function(element) {
			return <li> { element } </li>;
		});

		return (
			<div>
				<h3> Friends: </h3>
				<ul>
					{ elements }
				</ul>
			</div>
		)
	}
});

ReactDOM.render(
	<FriendsContainer name="Aaroh"/>,
	document.getElementById('app')
);
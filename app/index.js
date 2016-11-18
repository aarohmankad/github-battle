var
	React = require('react'),
	ReactDOM = require('react-dom');

var DUMMY_USER_DATA = {
	name: 'Aaroh Mankad',
	username: 'aarohmankad',
};

var
	ProfilePic = function(props) {
		return (
			<div>
				<img src={ 'http://github.com/' + props.username + '.png' }/>
			</div>
		);
	},
	ProfileName = function(props) {
		return (
			<div>
				<h2> { props.name } </h2>
			</div>
		);
	},
	ProfileLink = function(props) {
		return (
			<div>
				<a
					href={ 'http://github.com/' + props.username }
					target='_blank'>
					{ props.username }
				</a>
			</div>
		);
	},
	Avatar = function(props) {
		return (
			<div>
				<ProfilePic username={ props.user.username }/>
				<ProfileName name={ props.user.name }/>
				<ProfileLink username={ props.user.username }/>
			</div>
		)
	};

ReactDOM.render(
	<Avatar user={ DUMMY_USER_DATA }/>,
	document.getElementById('app')
);

var
	React = require('react'),
	ReactDOM = require('react-dom');

var DUMMY_USER_DATA = {
	imageURL: 'https://avatars0.githubusercontent.com/u/3311321?v=3&s=460',
	name: 'Aaroh Mankad',
	username: 'aarohmankad',
};

var
	ProfilePic = function(props) {
		return (
			<div>
				<img src={ props.imageURL }/>
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
				<ProfilePic imageURL={ props.user.imageURL }/>
				<ProfileName name={ props.user.name }/>
				<ProfileLink username={ props.user.username }/>
			</div>
		)
	};



ReactDOM.render(
	<Avatar user={ DUMMY_USER_DATA }/>,
	document.getElementById('app')
);
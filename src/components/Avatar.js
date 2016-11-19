import React from 'react'
import ProfilePic from './ProfilePic'
import ProfileName from './ProfileName'
import ProfileLink from './ProfileLink'

export default React.createClass({
	render() {
		return (
			<div>
				<ProfilePic username={ this.props.route.user.username }/>
				<ProfileName name={ this.props.route.user.name }/>
				<ProfileLink username={ this.props.route.user.username }/>
			</div>
		)
	}
})
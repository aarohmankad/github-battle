import React from 'react'

export default React.createClass({
	propTypes: {
		score: React.PropTypes.number,
		user: React.PropTypes.object,
	},
	render() {
		return (
			<div>
				{ !!this.props.score && 
				<li className='list-group-item'>
					<h3>Score: { this.props.score }</h3>
				</li> }
				
				<li className='list-group-item'>
					<img
						src={ this.props.user.avatar_url }
						alt={ this.props.user.name }
						className="img-rounded img-responsive"/>
				</li>

				{ this.props.user.name &&
				<li className='list-group-item'>
					Name: { this.props.user.name }
				</li> }

				<li className='list-group-item'>
					Username: { this.props.user.login }
				</li>
				
				{ this.props.user.location &&
				<li className='list-group-item'>
					Location: { this.props.user.location }
				</li> }
				
				{ this.props.user.company &&
				<li className='list-group-item'>
					Company: { this.props.user.company }
				</li> }
				
				<li className='list-group-item'>
					Followers: { this.props.user.followers }
				</li>
				
				<li className='list-group-item'>
					Following: { this.props.user.following }
				</li>
				
				<li className='list-group-item'>
					Public Repos: { this.props.user.public_repos }
				</li>
				
				{ this.props.user.blog &&
				<li className='list-group-item'>
					Blog: 
						<a href={ this.props.user.blog }>
							{ this.props.user.blog }
						</a>
				</li> }
			</div>
		)
	}
})
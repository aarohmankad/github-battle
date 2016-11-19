import React from 'react'

export default React.createClass({
	render() {
		return (
			<div>
				<a
					href={ 'http://github.com/' + this.props.username }
					target='_blank'>
					{ this.props.username }
				</a>
			</div>
		)			
	}
})
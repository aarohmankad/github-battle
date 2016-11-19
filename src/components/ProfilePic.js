import React from 'react'

export default React.createClass({
	render() {
		return (
			<div>
				<img src={ 'http://github.com/' + this.props.username + '.png' }/>
			</div>
		)
	}
})
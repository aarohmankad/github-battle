import React from 'react'

export default React.createClass({
	render() {
		return (
			this.props.isLoading
			? <p> Loading! </p>
			: <p> Confirm Battle! </p>
		)
	}
})

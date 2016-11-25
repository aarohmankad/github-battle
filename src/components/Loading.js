import React from 'react'

export default React.createClass({
	getDefaultProps() {
		return {
			isLoading: true
		}
	},
	render() {
		return (
			<div className='col-sm-12 text-center'>
				<h2> Loading! </h2>
			</div>
		)
	}
})
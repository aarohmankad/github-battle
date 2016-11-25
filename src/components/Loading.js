import React from 'react'

export default React.createClass({
	getDefaultProps() {
		return {
			isLoading: true,
			content: 'Loading!'
		}
	},
	render() {
		return (
			<div className='col-sm-12 text-center'>
				<h2>{ this.props.content }</h2>
			</div>
		)
	}
})
import React from 'react'

export default React.createClass({
	propTypes: {
		header: React.PropTypes.string.isRequired,
		submitUser: React.PropTypes.func.isRequired,
		updateUser: React.PropTypes.func.isRequired,
		username: React.PropTypes.string.isRequired,
	},
	render() {
		return (
			<div className='jumbotron col-sm-6 col-sm-offset-3 text-center'>
				<h1>{ this.props.header }</h1>

				<div className='col-sm-12'>
					<form onSubmit={ this.props.submitUser }>
						<div className='form-group'>
							<input
								type='text'
								placeholder='Github Username'
								className='form-control'
								onChange={ this.props.updateUser }
								value={ this.props.username }/>
						</div>

						<div className='form-group col-sm-4 col-sm-offset-4'>
							<button
								className='btn btn-block btn-success'
								type='submit'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
})
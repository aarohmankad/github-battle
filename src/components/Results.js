import React from 'react'
import { Link } from 'react-router'
import UserDetails from './UserDetails'

export default React.createClass({
	propTypes: {
		isLoading: React.PropTypes.bool.isRequired,
		playersInfo: React.PropTypes.array.isRequired,
		scores: React.PropTypes.array.isRequired,
	},
	render() {
		return (
			this.props.isLoading
			? <div> Loading!</div>
			: 	<div className='jumbotron col-sm-12 text-center'>
					<h1>Results</h1>
					
					<div className='col-sm-8 col-sm-offset-2'>
						<div className='col-sm-6'>
							<p className='lead'>
								Player 1
							</p>

							<UserDetails
								user={ this.props.playersInfo[0] }
								score={ this.props.scores[0] } />
						</div>

						<div className='col-sm-6'>
							<p className='lead'>
								Player 2
							</p>

							<UserDetails
								user={ this.props.playersInfo[1] }
								score={ this.props.scores[1] } />
						</div>
					</div>

					<div className='col-sm-12'>
						<Link to='/playerOne'>
							<button
								type='button'
								className='btn btn-lg btn-info'>
								Start Over
							</button>
						</Link>
					</div>
				</div>
		)
	}
})
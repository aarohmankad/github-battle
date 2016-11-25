import React from 'react'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import Loading from './Loading'

const type = React.PropTypes

export default React.createClass({
	propTypes: {
		isLoading: type.bool.isRequired,
		// FIXME: Use type.shape()
		playersInfo: type.arrayOf(type.object),
		initiateBattle: type.func.isRequired,
	},
	render() {
		return (
			this.props.isLoading
			? 	<Loading />
			: 	<div className='jumbotron col-sm-12 text-center'>
					<h1>Confirm Players</h1>
					
					<div className='col-sm-8 col-sm-offset-2'>
						<div className='col-sm-6'>
							<p className='lead'>
								Player 1
							</p>

							<UserDetails
								user={ this.props.playersInfo[0] }/>
						</div>

						<div className='col-sm-6'>
							<p className='lead'>
								Player 2
							</p>

							<UserDetails
								user={ this.props.playersInfo[1] } />
						</div>
					</div>

					<div className='col-sm-8 col-sm-offset-2'>
						<div className='col-sm-12'>
							<button
								type='button'
								className='btn btn-lg btn-success'
								onClick={ this.props.initiateBattle }>
								Initiate Battle!
							</button>
						</div>

						<div className='col-sm-12'>
							<Link to='/playerOne'>
								<button
									type='button'
									className='btn btn-lg btn-info'>
									Change Players
								</button>
							</Link>
						</div>
					</div>
				</div>
		)
	}
})

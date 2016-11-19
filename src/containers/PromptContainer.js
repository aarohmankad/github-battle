import React from 'react'
import Prompt from '../components/Prompt'

export default React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState() {
		return {
			username: '',
		}
	},
	updateUser(event) {
		this.setState({
			username: event.target.value,
		})
	},
	submitUser(event) {
		event.preventDefault()

		var username = this.state.username
		this.setState({
			username: ''
		})

		if (this.props.routeParams.playerOne) {
			this.context.router.push({
				pathname: '/battle',
				query: {
					playerOne: this.props.routeParams.playerOne,
					playerTwo: this.state.username,
				},
			})
		} else {
			this.context.router.push(`/playerTwo/${ this.state.username }`)
		}
	},
	render() {
		return (
			<Prompt
				submitUser={ this.submitUser }
				updateUser={ this.updateUser }
				header={ this.props.route.header }
				username={ this.state.username }/>	
		)
	}
})
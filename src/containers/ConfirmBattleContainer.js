import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

export default React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired,
	},
	getInitialState() {
		return {
			isLoading: true,
			playersInfo: [],
		}
	},
	componentDidMount() {
		var query = this.props.location.query
		// FIXME: Fetch info from Github and updateState
	},
	render() {
		return (
			<ConfirmBattle
				isLoading={ this.state.isLoading }
				playersInfo={ this.state.playersInfo }/>
		)
	}	
})
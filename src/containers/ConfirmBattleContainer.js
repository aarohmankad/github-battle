import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import Github from '../services/Github'

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

		Github
			.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(playersInfo => {
				this.setState({
					isLoading: false,
					playersInfo: playersInfo
				})
			})
	},
	initiateBattle() {
		this.context.router.push({
			pathname: '/results',
			state: {
				playersInfo: this.state.playersInfo,
			},
		})
	},
	render() {
		return (
			<ConfirmBattle
				isLoading={ this.state.isLoading }
				playersInfo={ this.state.playersInfo }
				initiateBattle={ this.initiateBattle }/>
		)
	}	
})
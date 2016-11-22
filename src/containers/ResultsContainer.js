import React from 'react'
import Results from '../components/Results'
import Github from '../services/Github'

export default React.createClass({
	getInitialState() {
		return {
			isLoading: true,
			scores: []
		}
	},
	componentDidMount() {
		let scores = Github.battle(this.props.location.state.playersInfo)
		
		this.setState({
			isLoading: false,
			scores: scores,
		})
	},
	render() {
		return (
			<Results 
				isLoading={ this.state.isLoading }
				playersInfo={ this.props.location.state.playersInfo }
				scores={ this.state.scores } />
		)
	}
})
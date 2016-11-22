import axios from 'axios'
import configGithub from '../config/Github'

export default {
	getUserInfo(username) {
		return axios.get(`${ configGithub.apiUrl }/users/${ username }`)
	},
	getPlayersInfo(players) {
		// FIXME: refactor
		return axios.all(players.map(username => {
			return this.getUserInfo(username)
		})).then(usersInfo => {
			return usersInfo.map(userInfo => {
				return userInfo.data
			})
		})
	},
	battle(playersInfo) {
		return playersInfo.map(playerInfo => {
			return playerInfo.followers
		})
	},
}

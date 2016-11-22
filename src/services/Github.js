import axios from 'axios'
import configGithub from '../config/Github'

export default {
	getUserInfo(username) {
		return axios.get(`${ configGithub.apiUrl }/users/${ username }`)
	},
	getStars(username) {
		return axios
			.get(`${ configGithub.apiUrl }/users/${ username}/repos?per_page=100`)
			.then(repos => {
				return repos.data.map(repo => {
					return repo.stargazers_count
				})
			})
			.then(stars => {
				return stars.reduce((prev, current) => {
					return prev + current
				})
			})
	},
	getScore(userInfo) {
		return this.getStars(userInfo.login).then(score => {
			return userInfo.followers * 3 + score
		})
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
		return axios.all(playersInfo.map(playerInfo => {
			return this.getScore(playerInfo)
		})).then(scores => {
			return scores;
		})
	},
}

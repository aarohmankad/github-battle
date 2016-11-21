import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer'

export default (
	<Router history={ browserHistory }>
		<Route path='/' component={ Main }>
			<IndexRoute component={ Home } />

			<Route
				path='/playerOne'
				component={ PromptContainer }
				header='Player One' />

			<Route
				path='/playerTwo/:playerOne'
				component={ PromptContainer }
				header='Player Two' />

			<Route
				path='/battle'
				component={ ConfirmBattleContainer } />
		</Route>
	</Router>
)
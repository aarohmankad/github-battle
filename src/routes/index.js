import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from '../components/Main'
import Home from '../components/Home'
import PromptContainer from '../containers/PromptContainer'

export default (
	<Router history={ browserHistory }>
		<Route path='/' component={ Main }>
			<IndexRoute component={ Home } />

			<Route
				path='/playerOne'
				component={ PromptContainer }
				header='Player One'></Route>

			<Route
				path='/playerTwo/:playerOne'
				component={ PromptContainer }
				header='Player Two'></Route>
		</Route>
	</Router>
)
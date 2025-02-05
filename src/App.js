import React, { useEffect, useRef } from 'react'
import { Switch, useLocation } from 'react-router-dom'

import AppRoute from './utils/AppRoute'
// Views
import Home from './views/Home'
// Layouts
import LayoutDefault from './layouts/LayoutDefault'
import ReactGA from 'react-ga'
import ScrollReveal from './utils/ScrollReveal'
import SignUp from './views/SingUp'

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE)

const trackPage = (page) => {
	ReactGA.set({ page })
	ReactGA.pageview(page)
}

const App = () => {
	const childRef = useRef()
	let location = useLocation()

	useEffect(() => {
		const page = location.pathname
		document.body.classList.add('is-loaded')
		childRef.current.init()
		trackPage(page)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location])

	return (
		<ScrollReveal
			ref={childRef}
			children={() => (
				<Switch>
					<AppRoute exact path="/" component={Home} layout={LayoutDefault} />
					<AppRoute path="/signup" component={SignUp} layout={LayoutDefault} />
				</Switch>
			)}
		/>
	)
}

export default App

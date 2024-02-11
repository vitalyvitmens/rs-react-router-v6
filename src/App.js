import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Category, Detail, NotFound } from './components'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.App}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:category" element={<Category />} />
					<Route path="/:category/:id" element={<Detail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</HashRouter>
		</div>
	)
}

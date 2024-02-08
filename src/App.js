import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Category from './components/Category/Category.jsx'
import Detail from './components/Detail/Detail.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:category" element={<Category />} />
					<Route path="/:category/:id" element={<Detail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Category from './components/Category'
import Detail from './components/Detail'
import NotFound from './components/NotFound'
// import styles from './app.module.css'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:category" element={<Category />} />
				<Route path="/:category/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

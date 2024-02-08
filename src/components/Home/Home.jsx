import Navigation from '../Navigation/Navigation'
import styles from './Home.module.css'

export default function Home() {
	return (
		<div className={styles.Home}>
			<h1>Добро пожаловать в приложение по вселенной Рика и Морти!</h1>
			<Navigation />
		</div>
	)
}

import { Task1 } from './Tasks/Task1'
import styles from './app.module.css'

export const App = () => {
	return (
		<div className={styles.app}>
			<h1>React Router V6</h1>
			<Task1 />
		</div>
	)
}

import { useState, useEffect } from 'react'

export function useFetch(url, options) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url, options)

				if (!response.ok) {
					throw new Error(response.statusText)
				}
				const data = await response.json()
				setData(data)
				setError(null)
			} catch (error) {
				setError(error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [url, options])

	return { data, error, loading }
}

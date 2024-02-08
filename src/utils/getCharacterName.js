import axios from 'axios'

export function getCharacterName(url) {
	return axios
		.get(url)
		.then((response) => {
			return response.data.name
		})
		.catch((error) => {
			return ''
		})
}

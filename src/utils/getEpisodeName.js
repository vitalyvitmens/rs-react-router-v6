import axios from 'axios'

// Создаем вспомогательную функцию для получения названия эпизода по URL-адресу
export function getEpisodeName(url) {
	// Отправляем GET-запрос к серверу с помощью библиотеки axios
	return axios
		.get(url)
		.then((response) => {
			// Если запрос успешен, возвращаем название эпизода из ответа сервера
			return response.data.name
		})
		.catch((error) => {
			// Если запрос неудачен, возвращаем пустую строку
			return ''
		})
}

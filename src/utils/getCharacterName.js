import axios from 'axios'

// Создаем вспомогательную функцию для получения имени персонажа по URL-адресу
export function getCharacterName(url) {
	// Отправляем GET-запрос к серверу с помощью библиотеки axios
	return axios
		.get(url)
		.then((response) => {
			// Если запрос успешен, возвращаем имя персонажа из ответа сервера
			return response.data.name
		})
		.catch((error) => {
			// Если запрос неудачен, возвращаем пустую строку
			return ''
		})
}

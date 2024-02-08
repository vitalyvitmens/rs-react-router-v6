export async function getCharacterName(number) {
	try {
		const json = await import('../db.json')
		const character = json.characters.find((ep) => ep.id === Number(number))
		if (character) {
			return character.name
		}
		return ''
	} catch (error) {
		return ''
	}
}

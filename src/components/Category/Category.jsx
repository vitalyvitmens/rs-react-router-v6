import { useEffect, useState } from 'react'
import { Link, useSearchParams, useParams } from 'react-router-dom'
import { Navigation, NotFound, CustomSelect } from '../index'
import styles from './Category.module.css'

export const Category = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { category } = useParams()
	const sortType = searchParams.get('sort')
	const [data, setData] = useState([])
	const [isCategoryLoading, setCategoryLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			try {
				const json = await import('../../db.json')
				const categoriesArray = json[category]
				setData(categoriesArray)
				setCategoryLoading(false)
			} catch (error) {
				console.error(error)
				setCategoryLoading(false)
			}
		}

		fetchData()
	}, [category])

	const sortByCreated = (array, order) => {
		const copy = [...(array || [])]
		copy.sort((a, b) => {
			const dateA = Date.parse(a.created)
			const dateB = Date.parse(b.created)
			if (order === 'ASC') {
				return dateA - dateB
			} else if (order === 'DESC') {
				return dateB - dateA
			} else {
				return 0
			}
		})
		return copy
	}

	const handleChangeSort = (event) => {
		const value = event.target.value
		setSearchParams({ sort: value })
	}

	if (category && !['characters', 'locations', 'episodes'].includes(category)) {
		return <NotFound />
	}

	const categoryList =
		!data || isCategoryLoading ? (
			<span>Загрузка...</span>
		) : (
			<ul>
				{sortByCreated(data, sortType).map((item) => (
					<li key={item.id}>
						<Link to={`/${category}/${item.id}`}>{item.name}</Link>
					</li>
				))}
			</ul>
		)

	return (
		<div className={styles.Category}>
			<Navigation />
			<form>
				<CustomSelect
					label="Сортировать по дате создания:"
					type="select"
					id="select"
					name="select"
					value={sortType || ''}
					onChange={handleChangeSort}
				/>
			</form>
			{categoryList}
		</div>
	)
}

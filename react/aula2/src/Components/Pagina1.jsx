import { useEffect, useState } from 'react'
import axios from 'axios'

export function Pagina1() {
	const [lista, setLista] = useState([])

	// function carregarData() {
	// 	axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
	// 		setLista(response.data)
	// 	})
	// }

	useEffect(async () => {
		const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
		setLista(response.data)
		console.log(response)
	}, [])

	// useEffect(() => {
	// 	axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
	// 		setLista(response.data)
	// 	})
	// }, [])

	return (
		<div className="pagina">
			<h3>Página 1</h3>
			{/* <button className="btn" onClick={carregarData}>
				Carregar Conteúdo
			</button> */}
			{lista.map((item, index) => (
				<div className="item" key={index}>
					<p>Id: {item.id}</p>
					<p>title: {item.title}</p>
					<p>Body: {item.body}</p>
				</div>
			))}
		</div>
	)
}

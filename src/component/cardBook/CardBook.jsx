import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { readBookAC } from '../../store/booksReducer'
import './CardBook.css'

const CardBook = ({ bookInfo }) => {

	const dispatch = useDispatch()

	const readBook = () => {
		dispatch(readBookAC(bookInfo))
	}

	return (
		<Link onClick={readBook} to={`/book/${bookInfo?.id}`} key={bookInfo.id} className="col s12 m4">
			<div className="card">
				<div className="card-image">
					<img src={bookInfo?.volumeInfo?.imageLinks?.smallThumbnail} />
				</div>
				<div className="card-content">
					<span className="card-title">{bookInfo?.volumeInfo?.title}</span>
					<p>{bookInfo?.volumeInfo?.categories}</p>
				</div>
				<div className="card-action">
					<p>{bookInfo?.volumeInfo?.authors?.map(el => <p>{el}</p>)}</p>
				</div>
			</div>
		</Link>
	)
}

export default CardBook
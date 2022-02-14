import React from 'react'
import './BookPage.css'
import { useSelector } from 'react-redux'

const BookPage = () => {

	const book = useSelector(store => store.books.book)

	return (
		<div className='bookPage'>
			<div className="bookPage-image">
				<img width="100%" alt='avatarka' src={book?.volumeInfo?.imageLinks?.smallThumbnail || 'https://clck.ru/bN6sy'} />
			</div>
			<div className="bookPage-info">
				<span>{book?.volumeInfo?.categories}</span>
				<h2>{book?.volumeInfo?.title}</h2>
				<p>{book?.volumeInfo?.authors?.map(el => <> <br /><span className='authors'>{el}</span></>)}</p>
			</div>
		</div>
	)
}

export default BookPage
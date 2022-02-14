import React, { useEffect, useRef, useState } from 'react'
import './SearchPage.css'
import M from 'materialize-css'
import SearchInput from '../../component/searchInput/SearchInput'
import CardBook from '../../component/cardBook/CardBook'
import { useDispatch, useSelector } from 'react-redux'
import { getBooksAsyncAC, loadMoreAsyncAC } from '../../store/booksReducer'
import ReactLoading from 'react-loading'
import { UseFilter } from '../../hooks/useFilter'

const SearchPage = () => {

	const dispatch = useDispatch()
	const ref = useRef()
	const books = useSelector(store => store.books)

	const [inputValue, setInputValue] = useState('')
	const [selectValueCotegories, setSelectValueCotegories] = useState('All')
	const [selectValueSorting, setSelectValueSorting] = useState('Relevance')
	const [loading, setLoading] = useState(false)

	const isLoadMore = ((books.stepPagination * books.countPagination) >= books.books?.totalItems)
	const filterItems = UseFilter(books.books.items, selectValueCotegories, selectValueSorting)

	useEffect(() => {
		M.AutoInit(ref.current)
	})

	const onChangeInputValue = (e) => {
		setInputValue(e.target.value)
	}

	const onChangeCategory = (e) => {
		setSelectValueCotegories(e.target.value)
	}

	const onChangeSorting = (e) => {
		setSelectValueSorting(e.target.value)
	}

	const send = async () => {
		setLoading(true)
		await dispatch(getBooksAsyncAC(`volumes?q=${inputValue}`, books.stepPagination, books.countPagination))
		setLoading(false)
	}

	const loadMore = async () => {
		setLoading(true)
		await dispatch(loadMoreAsyncAC(`volumes?q=${inputValue}`, books.stepPagination, books.countPagination))
		setLoading(false)
	}

	return (
		<div className='searchPage'>
			<SearchInput
				inputValue={inputValue}
				onChangeInputValue={onChangeInputValue}
				selectValueCotegories={selectValueCotegories}
				onChangeCategory={onChangeCategory}
				selectValueSorting={selectValueSorting}
				onChangeSorting={onChangeSorting}
				send={send}
			/>
			{!books.books.items?.length ||
				<span className='searchPage-resultCount'>
					<span>{((books.stepPagination * books.countPagination) >= books.books?.totalItems) ? books.books?.totalItems : (books.stepPagination * books.countPagination)} </span>
					out of <span>{books.books?.totalItems}</span> are shown
				</span>
			}
			<div className="searchPage-resultSearch">
				{filterItems.map(el => <CardBook bookInfo={el} />)}
			</div>

			{(!books.books.items?.length || !!filterItems.length) ||
				<div className='center-align'>
					<h4>There are no books that satisfy the filtering conditions.</h4>
					<p>Try downloading more⏬</p>
				</div>
			}

			{isLoadMore ||
				<div onClick={loadMore} className="searchPage-btnLoadMore">
					{!books.books.items?.length ||
						<span className="waves-effect waves-light btn-large blue">Load more</span>
					}
				</div>
			}

			<div style={{ display: (loading ? '' : 'none') }} className="loading">
				<ReactLoading color={'#0085FF'} width="100px" type="spokes" />
			</div>
		</div>
	)
}

export default SearchPage
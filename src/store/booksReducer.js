const initialState = {
	books: {
		items: []
	},
	book: {},
	stepPagination: 30,
	countPagination: 1
}

const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FILL_BOOKS': {
			if(action.books?.totalItems < state.stepPagination) return {
				...state,
				books: action.books,
				stepPagination: action.books?.totalItems
			}
			return {
				...state,
				books: action.books,
				countPagination: 1
			}
		}
		case 'LOAD_MORE': {
			return {
				...state,
				books: {
					...state.books,
					items: [...state.books.items, ...action.books]
				},
				countPagination: state.countPagination + 1
			}
		}
		case 'READ_BOOK': {
			return {
				...state,
				book: action.book
			}
		}
		default: return state
	}
}

const fillBooksAC = (books) => ({ type: 'FILL_BOOKS', books })
const loadMoreAC = (books) => ({ type: 'LOAD_MORE', books })
export const readBookAC = (book) => ({ type: 'READ_BOOK', book })

export const getBooksAsyncAC = (queryParam = '', stepPagination = 30) => async (dispatch) => {
	try {
		await fetch(`https://www.googleapis.com/books/v1/${queryParam}&maxResults=${stepPagination}&startIndex=0`, {
			method: 'GET'
		})
			.then(data => data.json())
			.then(data => {
				dispatch(fillBooksAC(data))
			})
	} catch (e) {
		console.log(e);
	}
}

export const loadMoreAsyncAC = (queryParam = '', stepPagination = 30, countPagination = 1) => async (dispatch) =>{
	try {
		await fetch(`https://www.googleapis.com/books/v1/${queryParam}&maxResults=${stepPagination}&startIndex=${(countPagination * stepPagination) + 1}`, {
			method: 'GET'
		})
			.then(data => data.json())
			.then(data => {
				dispatch(loadMoreAC(data.items))
			})
	} catch (e) {
		console.log(e);
	}
}


export default booksReducer
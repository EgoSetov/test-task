import React from 'react'
import './SearchInput.css'

const SearchInput = (props) => {

	const {
		inputValue,
		onChangeInputValue,
		onChangeCategory,
		onChangeSorting,
		selectValueCotegories,
		selectValueSorting,
		send
	} = props

	return (
		<div className="panel">
			<div className="panel-btnSearch">
				<span onClick={send} className="waves-effect waves-light blue btn">search</span>
			</div>
			<div className="panel-input">
				<div className="row">
					<div className="input-field col s12">
						<input onChange={onChangeInputValue} value={inputValue} id="input_text" type="text" />
						<label htmlFor="email">Name book</label>
					</div>
				</div>
			</div>
			<div className="panel-filters">
				<div className="input-field col s12">
					<select value={selectValueCotegories} onChange={onChangeCategory}>
						<option value="All">All</option>
						<option value="Art">Art</option>
						<option value="Biography">Biography</option>
						<option value="Computers">Computers</option>
						<option value="History">History</option>
						<option value="Medical">Medical</option>
						<option value="Poerty">Poerty</option>
					</select>
					<label>Categories</label>
				</div>
				<div className="input-field col s12">
					<select value={selectValueSorting} onChange={onChangeSorting}>
						<option value="Relevance">Relevance</option>
						<option value="Newest">Newest</option>
					</select>
					<label>Sorting by</label>
				</div>
			</div>
		</div>
	)
}

export default SearchInput
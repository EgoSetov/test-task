import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/Header';
import BookPage from './pages/bookPage/BookPage';
import SearchPage from './pages/searchPage/SearchPage';

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<Routes>
					<Route path="/" element={<SearchPage />} />
					<Route path="/book/:id" element={<BookPage />} />
				</Routes>
			</div>
		</>
	);
}

export default App;

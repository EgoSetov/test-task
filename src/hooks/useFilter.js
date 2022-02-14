
export const UseFilter = (arr, categories = 'All', sorting = 'Relevance') => {

	if (!arr) return []

	if (categories === 'All' && sorting === 'Relevance') return arr

	if (categories !== 'All' && sorting === 'Relevance')
		return arr.filter(el => el?.volumeInfo?.categories?.includes(categories))

	if (categories === 'All' && sorting !== 'Relevance')
		return arr.sort((a, b) => {
			if (+a?.volumeInfo?.publishedDate?.slice(0, 4) > +b?.volumeInfo?.publishedDate?.slice(0, 4)) return -1;
			if (+a?.volumeInfo?.publishedDate?.slice(0, 4) === +b?.volumeInfo?.publishedDate?.slice(0, 4)) return 0;
			if (+a?.volumeInfo?.publishedDate?.slice(0, 4) < +b?.volumeInfo?.publishedDate?.slice(0, 4)) return 1;
		})

	return arr.filter(el => el?.volumeInfo?.categories?.includes(categories)).sort((a, b) => {
		if (+a?.volumeInfo?.publishedDate?.slice(0, 4) > +b?.volumeInfo?.publishedDate?.slice(0, 4)) return -1;
		if (+a?.volumeInfo?.publishedDate?.slice(0, 4) === +b?.volumeInfo?.publishedDate?.slice(0, 4)) return 0;
		if (+a?.volumeInfo?.publishedDate?.slice(0, 4) < +b?.volumeInfo?.publishedDate?.slice(0, 4)) return 1;
	})
}
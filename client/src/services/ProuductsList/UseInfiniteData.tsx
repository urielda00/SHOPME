import { useInfiniteQuery } from 'react-query';
import baseRenderUrl from '../../assets/baseUrl';

interface FetchItemsOptions {
	page: string;
	category: string;
	os: string | boolean;
	year: number | boolean;
	brand?: string | boolean;
}

const fetchItems = async ({ page, category, year = false, os = false, brand = false }: FetchItemsOptions) => {
	const LimitItemsPerPage: number = 2;
	const baseUrl = `${baseRenderUrl}/product/readProducts`;
	let url = `${baseUrl}?per_page=${LimitItemsPerPage}&page=${page}`;

	if (category && brand && os && year) {
		url += `&category=${category}&year=${year}&os=${os}&brand=${brand}`;
	} else if (category && brand && os) {
		url += `&category=${category}&os=${os}&brand=${brand}`;
	} else if (category && brand) {
		url += `&category=${category}&brand=${brand}`;
	} else if (category) {
		url += `&category=${category}`;
	}
	const response = await fetch(url);
	return response.json();
};

export const UseInfiniteData = (category: any, year: any = false, os: any = false, brand: any = false) => {
	return useInfiniteQuery(
		['items', `category: ${category}`, `year: ${year}`, `os:${os}`, `brand:${brand}`],
		({ pageParam = 1 }) => fetchItems({ page: pageParam.toString(), category, year, os, brand }),
		{
			getNextPageParam: (lastPage, allPages) => {
				const nextPage = allPages.length + 1;
				return lastPage.length !== 0 ? nextPage : undefined;
			},
			staleTime: 1000 * 60 * 2, //2 minutes of no background-refetching
			refetchInterval: 1000 * 60 * 2, //every 2 minutes, will be refetching
			refetchIntervalInBackground: true, //make the above line to work even if the window not on focus.
			refetchOnWindowFocus: false, //Make the re-fetching on every time wwe back to browser- off.
		}
	);
};

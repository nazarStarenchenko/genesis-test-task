import { StyledPagination } from "./styles/StyledPagination";

export default function Pagination ({ 
								coursesPerPage, 
								totalCountries,
								paginate}) {

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalCountries / coursesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<StyledPagination>
			<ul>
				{
					pageNumbers.map(number => <li key={number} onClick={() => {
						paginate(number);
					}}>{ number }</li>)
				}
			</ul>	
		</StyledPagination>
	)
}
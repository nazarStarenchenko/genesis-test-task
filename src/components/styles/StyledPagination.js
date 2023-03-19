import styled from "styled-components";

 
export const StyledPagination = styled.div`

	ul {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 100px;
	}

	li {
		list-style-type: none;
		border-radius: 10px;
		display: inline;
		border: 0.5px solid #b0b0b0;
		font-size: 20px;
		padding: 5px 10px 5px 10px;
  		margin: 0 3px;
		color: #696969;
	}

	li:hover {
		color: black;
		border-color: black;
	}

`;
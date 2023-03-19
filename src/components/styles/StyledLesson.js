import styled from "styled-components";

 
export const StyledLesson = styled.div`

	border-bottom: 0.5px solid #d0d0d0;
	width: 80%;
	margin-left: 10%;
	margin-top: 40px;
	display: grid;
	grid-template-columns: 100%;
	justify-items:center;
	grid-row-gap: 20px;
	padding-bottom: 60px;

	h3 {
		text-align: center;
		color: #696969;
		margin-top: 10px;
		font-size: 23px;
		width: 100%;
	}

	button {
		width: 200px;
		border: 0.2px solid #696969;
		border-radius: 20px;
		padding: 10px;
		text-align: center;
		color: #6c6c6c;
		font-size: 16px;
		background-color: white;
	}

	.hoverable:hover {
		color: black;
		border-color: black;
		border-width: 1px;
		transition-property: color border-width border-color;
		transition-duration: 0.2s;
	}

	.hoverable:focus {
		outline: none;
	}

	.icon {
		font-size: 18px;
		padding-top: 3px;
	}
	
	video  {
		width: 50%;
		height: auto;
		border-radius: 10px;	
	}


`
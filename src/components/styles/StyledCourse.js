import styled from "styled-components";

 
export const StyledCourse = styled.div`
	
	width: 400px;

	border: 0.2px solid #d0d0d0;
	border-radius: 50px;

	margin-bottom: 50px;
	overflow: hidden;

	img {
		width: 100%;
		height: auto;
	}

	h2 {
		text-align: center;
		width: 80%;
		margin-left: 10%;
	}

	a {
		text-decoration: none;
		color: black;
	}

	a:hover {
		color: #b0b0b0;
		transition-property: color; 
		transition-duration: 0.3s;
	}

	a:focus {
		outline: none;
	}

	.container {
		display: flex;
		justify-content: space-around;
		width: 70%;
		margin-left: 15%;

	}

	.container p {
		display: inline-block;
		color: #b0b0b0;
	}

	.description {
		margin-top: 10px;
		margin-bottom: 20px;
		font-size: 20px;
		text-align:center;
		color: #585858;
	}

	h3 {
		text-align: center;
		color: #696969;
	}

	ul {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		color: #6c6c6c;
		width: 100%;
		width: 90%;
		margin-left: 5%;
	}

	li {
		list-style-type: none;
		display: inline-block;
		margin: 5px 5px;
		border: 0.2px solid #696969;
		border-radius: 20px;
		padding: 7px;
		text-align: center;
		font-size: 14px;
	}


`;
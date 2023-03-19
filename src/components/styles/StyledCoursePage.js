import styled from "styled-components";

 
export const StyledCoursePage = styled.div`
	width: 60%;
	margin-left: 20%;

	img {
		width: 100%;
		height: auto;
	}

	h1 {
		text-align: center;
		width: 80%;
		margin-left: 10%;
	}

	h2, h3{
		text-align: center;
		color: #696969;
		margin-top: 10px;
	}

	h2 {
		font-size: 30px;
		margin-top: 40px;
		border-bottom: 2px solid #d0d0d0;
		padding-bottom: 5px;
	}

	h3 {
		font-size: 20px;
	}

	.container {
		display: flex;
		justify-content: center;
		width: 100%;

	}

	.container p {
		display: inline-block;
		margin: 0 20px;
		font-size: 18px;
		color: #575757;
	}

	.description {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 23px;
		text-align:center;
		color: #585858;
	}

	ul {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		color: #6c6c6c;
		width: 80%;
		margin-left: 10%;
	}

	li {
		list-style-type: none;
		display: inline-block;
		margin: 10px 10px;
		border: 0.2px solid #696969;
		border-radius: 20px;
		padding: 10px;
		text-align: center;
	}

  	@media screen and (max-width: 650px) {
  		width: 80%;
		margin-left: 10%;
	}
`
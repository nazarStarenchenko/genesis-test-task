import styled from "styled-components";

export const StyledLoading = styled.div`
	.loader-container {
	    width: 300px;
	    height: 300px;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    position: absolute;
	    left: 50%;
	    transform: translate(-50%, 0);
	}

	.spinner {
	    width: 64px;
	    height: 64px;
	    border: 8px solid;
	    border-color: #696969 transparent #696969 transparent;
	    border-radius: 50%;
	    animation: spin-anim 1.2s linear infinite;
	}

	@keyframes spin-anim {
	    0% {
	        transform: rotate(0deg);
	    }
	    100% {
	        transform: rotate(360deg);
	    }
	}
`;

import { StyledLoading } from "./styles/StyledLoading";

export default function Loading () {

	return (
		<StyledLoading>
        	<div className="loader-container">
      	  		<div className="spinner"></div>
        	</div>
		</StyledLoading>
	)
}
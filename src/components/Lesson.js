import { StyledLesson } from "./styles/StyledLesson";
import { AiTwotoneLock } from 'react-icons/ai';
import { useState } from "react";

export default function Lesson ({
								tittle,
								status,
								order,
								videoLink,
								imageLink,
							  }) {



	const [showVideo, setShowVideo] = useState(order === 1 ? true : false);

	return (
		<StyledLesson>
			<h3>{ tittle }</h3>		
			{
				status === "locked" ?
				<button className="btn"> <AiTwotoneLock className="icon"/> Lesson is blocked </button> 
				: 
				<button className="btn hoverable" onClick={() => setShowVideo(oldValue => !oldValue)}>Show lesson</button>
			}

			{
				(status !== "locked" && showVideo)  &&
				(
				<video controls 
					poster={`${imageLink}/lesson-${order}.webp`} 
					autoPlay={order === 1 ? true : false}
					muted={order === 1 ? true : false}
				>
	    			<source src={videoLink} type="application/x-mpegURL" />
				</video>
				)
			}


		</StyledLesson>
	)
}
import { useState } from "react";
import ReactPlayer from 'react-player';

import { StyledLesson } from "./styles/StyledLesson";
import { AiTwotoneLock } from 'react-icons/ai';

export default function Lesson ({
								tittle,
								status,
								order,
								videoLink,
								imageLink,
							  }) {


	const [isFirstVideo, setIsFirstVideo] = useState(order === 1 ? true : false);
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);

	const onLoadedData = () => {
		console.log("oaded§§")
    	setIsVideoLoaded(true);
  	}

	return (
		<StyledLesson>
			<h3>{ tittle }</h3>		
			{
				status === "locked" ?
				<button className="btn"> <AiTwotoneLock className="icon"/> Lesson is blocked </button> 
				: 
				<button className="btn hoverable" onClick={() => setIsFirstVideo(oldValue => !oldValue)}>Show lesson</button>
			}
			{
				(status !== "locked" && isFirstVideo) &&
				(	order === 1 ? 
					<ReactPlayer playing={isVideoLoaded} muted={true}
					url={videoLink} controls={true} className="video" onReady={onLoadedData} />
					:
					<ReactPlayer url={videoLink} controls={true} className="video" />
				)
			}


		</StyledLesson>
	)
}
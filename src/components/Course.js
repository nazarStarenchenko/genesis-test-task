import { StyledCourse } from "./styles/StyledCourse";
import { AiFillStar } from 'react-icons/ai';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Course ({ 
								id, 
								title, 
								imageLink,
								rating,
								lessonsCount,
								description,
								skills
								}) {



	return(
		<StyledCourse>

			<h2>
          		<Link to={"/course/" + id}> {title} </Link>
			</h2>

			<img src={imageLink + '/cover.webp'} alt="preview image" />

			<div className="container">
				<p className="rating">
					<AiFillStar />	
					{ rating }
				</p>
				<p>Number of lessons: { lessonsCount }</p>	
			</div>

			<p className="description">{description}</p>

			<h3>Skills required:</h3>
			{skills.length > 0 ? 
				<ul>
					{ skills.map((skill, index) => <li key={ index } >{ skill }</li>) }
				</ul>	
				: 
				<ul>
					<li>No skills required</li>
				</ul>	

			}
		</StyledCourse>
	)
}			


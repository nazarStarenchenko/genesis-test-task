import { useState, useEffect } from "react";
import { AiFillStar } from 'react-icons/ai';
import { useLocation } from "react-router";

import { StyledCoursePage } from "./styles/StyledCoursePage";
import Loading from "./Loading";
import Lesson from "./Lesson";

export default function CoursePage () {

	// const [resultJSX, SetResultJSX] = useState(); 
	const [course, setCourse] = useState();
	const [loading, setLoading] = useState(true);

	const location = useLocation();
  	const id = location.pathname.split("/")[2];

  	useEffect(() => {
		(async function () {
			try {
				const tokenResponse = await fetch('https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions')
				const { token }  = await tokenResponse.json(); 
				const courseResponse = await fetch(`https://api.wisey.app/api/v1/core/preview-courses/${id}` , 
					{
						method: 'GET',
						headers: {
							"Content-Type" : "application/json",
							'Authorization': `Bearer ${token}`,
						},
				});
				const resp = await courseResponse.json();
				setCourse(resp);
			  	setLoading(false);
			} catch (err) {
				console.log(err);
			}
		})(); 
	}, []);


	return (
		<>
			{loading ? <Loading /> : 
				(<StyledCoursePage>
  					<h1>{ course.title }</h1>
					<p className="description">{course.description}</p>
						<div className="container">
						<p className="rating">
							<AiFillStar />	
							{ course.rating }
						</p>
						<p>Number of lessons: { course.lessons.length }</p>	
					</div>	
					<img src={course.previewImageLink + '/cover.webp'} alt="preview image" />

					<h3>Skills required:</h3>
					{course.meta.skills.length > 0 ? 
						<ul>
							{ course.meta.skills.map((skill, index) => <li key={ index } >{ skill }</li>) }
						</ul>	
						: 
						<ul>
							<li>No skills required</li>
						</ul>	
					}

					<h2>Lessons</h2>
					{
						course.lessons.map(lesson => (
							<Lesson 
								key={lesson.id}
								tittle={lesson.title}
								status={lesson.status}
								order={lesson.order}
								videoLink={lesson.link} 
								imageLink={lesson.previewImageLink}
							/>
						))
					}

				</StyledCoursePage>)
			}	
		</>
	)
}




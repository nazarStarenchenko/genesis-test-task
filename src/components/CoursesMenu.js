import { useEffect, useState } from "react";

import { StyledCoursesMenu } from "./styles/StyledCoursesMenu";
import Loading from "./Loading";
import Course from "./Course";
import Pagination from "./Pagination";

export default function CoursesMenu () {
	const [courseComponents, setCourseComponents] = useState([]);		
	const [loading, setLoading] = useState(true);

	const [currentPage, setCurrentPage] = useState(1);
	const [coursesPerPage, setCoursesPerPage] = useState(10);

	useEffect(() => {
		(async function () {
			try {
				const tokenResponse = await fetch('https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions')
				const { token }  = await tokenResponse.json(); 

				const FetchedData = await fetch('https://api.wisey.app/api/v1/core/preview-courses', 
					{
						method: 'GET',
						headers: {
							"Content-Type" : "application/json",
							'Authorization': `Bearer ${token}`,
						},
				})

				const { courses } = await FetchedData.json();
				
				const arrOfComponents = courses.map(val => {
					let hasSkills = true;
					if (!val.meta.hasOwnProperty("skills")) {
						hasSkills = false;
					}

					return <Course 
						key={val.id} 
						id={val.id} 
						title={val.title}
						imageLink={val.previewImageLink}
						rating={val.rating}
						lessonsCount={val.lessonsCount}
						description={val.description}
						skills={hasSkills ? val.meta.skills : []}
					/>
				});

				setCourseComponents(arrOfComponents)
				setLoading(false);

			} catch (err) {
				console.log(err);
			}
		})(); 
	}, []);

	const lastCourseIndex = currentPage * coursesPerPage;
	const firstCourseIndex = lastCourseIndex - coursesPerPage;
	const currentCourses = courseComponents.slice(firstCourseIndex, lastCourseIndex);


	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<main>
			<StyledCoursesMenu>
				{ loading ? (<Loading />) : currentCourses}
			</StyledCoursesMenu>
			{!loading && <Pagination 
						coursesPerPage={coursesPerPage} 
						totalCountries={courseComponents.length}
						paginate={paginate}
						/>
			} 
		</main>
	)
}

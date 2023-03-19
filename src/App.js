import { BrowserRouter, Route, Routes} from 'react-router-dom';

import CoursesMenu from "./components/CoursesMenu";
import CoursePage from "./components/CoursePage.js";
import Header from "./components/Header";

import { GlobalStyles }  from "./components/styles/Global";


function App() {


  return (
	<>
		<GlobalStyles />
	    <BrowserRouter>
			<Header />
	    	<Routes>
	    		<Route path="/" element = {<CoursesMenu />}/>
	    		<Route path="/course/:id" element = {<CoursePage />}/>
	    	</Routes>
	    </BrowserRouter>
		 
	</>
  )
}

export default App;




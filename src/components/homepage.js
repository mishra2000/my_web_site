import HomepageContainer from './homepageContainer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function Homepage() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<HomepageContainer/>}></Route>
        </Routes>
    </Router>
  );
}

export default Homepage;
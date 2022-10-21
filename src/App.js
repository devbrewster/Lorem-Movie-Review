import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar/>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/create" element={<Create/>}/>
                        <Route path="/blogs/:id" element={<BlogDetails/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import Header from "./Header";
import Main from "./Main";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Footer from "./Footer";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Main/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

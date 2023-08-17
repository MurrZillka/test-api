import {Header} from "./Header/Header";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {ApiTest} from "./pages/ApiTest/ApiTest";

function App() {
    return (
        <div>
            <Header/>
            <div className="page-wrapper">
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/test" element={<ApiTest/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

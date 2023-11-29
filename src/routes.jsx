import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./App";
import News from "./pages/newsletter";

const Rotas = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/News" element={<News />} />
            </Routes>
        </Router>
        </>
    )
}

export default Rotas;

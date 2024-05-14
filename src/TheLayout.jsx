import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
const TheLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/booking" element={<Booking></Booking>} />
                    </Routes>
                </Router>
            </main>
        </>
    );
};

export default TheLayout;

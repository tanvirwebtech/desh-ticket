import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";
const TheLayout = () => {
    return (
        <>
            <Router basename="/">
                <Navbar></Navbar>
                <main>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/booking" element={<Booking></Booking>} />
                    </Routes>
                </main>
            </Router>
        </>
    );
};

export default TheLayout;

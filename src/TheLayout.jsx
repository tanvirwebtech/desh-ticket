import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Booking from "./pages/booking/Booking";
import Home from "./pages/home/Home";
import ViewSeats from "./pages/view-seats/ViewSeats";
import Checkout from "./pages/checkout/Checkout";
const TheLayout = () => {
    return (
        <>
            <Router basename="/">
                <Navbar></Navbar>
                <main>
                    <Routes>
                        <Route path="/" element={<Home></Home>} />
                        <Route path="/booking" element={<Booking></Booking>} />
                        <Route path="/view-seats" element={<ViewSeats />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </main>
            </Router>
        </>
    );
};

export default TheLayout;

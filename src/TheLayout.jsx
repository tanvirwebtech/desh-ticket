import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Booking from "./pages/booking/Booking";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import ViewSeats from "./pages/view-seats/ViewSeats";
import TermOfUse from "./pages/others/TermOfUse";
import PrivacyPolicy from "./pages/others/PrivacyPolicy";
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
                        <Route path="/term-of-use" element={<TermOfUse />} />
                        <Route
                            path="/privacy-policy"
                            element={<PrivacyPolicy />}
                        />
                    </Routes>
                </main>
                <Footer></Footer>
            </Router>
        </>
    );
};

export default TheLayout;

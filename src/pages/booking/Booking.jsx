// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchForm from "../../components/bookings/SearchForm";

const Booking = () => {
    return (
        <>
            <div>
                <div className="container mx-auto">
                    <h2 className="text-center font-medium text-3xl">
                        Book Your Ticket
                    </h2>
                    <div className="bus-search-form">
                        <SearchForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;

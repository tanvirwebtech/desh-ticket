// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import useCities from "../../hooks/useCities";

const Booking = () => {
    const { cities } = useCities();
    return (
        <>
            <div>
                <div className="container mx-auto">
                    <h2>Book Your Ticket</h2>
                    <div className="search-bar">
                        <div className="from-city">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">From</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter City"
                                    list="city"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <datalist id="city">
                                    {cities?.map((city) => (
                                        <option
                                            value={city?.name}
                                            key={city?.id}
                                        >
                                            {city?.name}
                                        </option>
                                    ))}
                                </datalist>
                            </label>
                        </div>
                        <div className="to-city">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">To</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter City"
                                    list="city"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <datalist id="city">
                                    {cities?.map((city) => (
                                        <option
                                            value={city?.name}
                                            key={city?.id}
                                        >
                                            {city?.name}
                                        </option>
                                    ))}
                                </datalist>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;

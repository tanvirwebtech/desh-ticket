import { GiSteeringWheel } from "react-icons/gi";

import SeatIcon from "./SeatIcon";

const ViewSeats = () => {
    const seats = {
        seat_layout: [
            {
                row: 1,
                seats: [
                    {
                        seat_number: "1A",
                        status: "available",
                    },
                    {
                        seat_number: "1B",
                        status: "booked",
                    },
                    {
                        seat_number: "1C",
                        status: "available",
                    },
                    {
                        seat_number: "1D",
                        status: "available",
                    },
                    {
                        seat_number: "1E",
                        status: "available",
                    },
                    {
                        seat_number: "1F",
                        status: "available",
                    },
                    {
                        seat_number: "1G",
                        status: "available",
                    },
                    {
                        seat_number: "1H",
                        status: "available",
                    },
                    {
                        seat_number: "1I",
                        status: "available",
                    },
                    {
                        seat_number: "1J",
                        status: "available",
                    },
                ],
            },
            {
                row: 2,
                seats: [
                    {
                        seat_number: "2A",
                        status: "available",
                    },
                    {
                        seat_number: "2B",
                        status: "booked",
                    },
                    {
                        seat_number: "2C",
                        status: "available",
                    },
                    {
                        seat_number: "2D",
                        status: "available",
                    },
                    {
                        seat_number: "2E",
                        status: "available",
                    },
                    {
                        seat_number: "2F",
                        status: "available",
                    },
                    {
                        seat_number: "2G",
                        status: "available",
                    },
                    {
                        seat_number: "2H",
                        status: "booked",
                    },
                    {
                        seat_number: "2I",
                        status: "available",
                    },

                    {
                        seat_number: "2J",
                        status: "available",
                    },
                ],
            },
        ],
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="heading text-center my-2">
                    <h2 className="text-3xl font-medium">View Seats:</h2>
                </div>
                <div className="bus-info border rounded-sm">
                    <div className="grid grid-cols-5 gap-3 text-center py-4 my-4">
                        <div className="bus">
                            <p>Bus Name:</p>
                            <h3>Ena Transport</h3>
                        </div>
                        <div className="dep time">
                            <p>Depature:</p>
                            <h3>06:30 AM</h3>
                        </div>
                        <div className="date">
                            <p>Journey Date:</p>
                            <h3>12/05/2024</h3>
                        </div>
                        <div className="av-seats">
                            <p>Available Seats:</p>
                            <h3>25</h3>
                        </div>
                        <div className="arr time">
                            <p>Arrival:</p>
                            <h3>02:30 PM</h3>
                        </div>
                    </div>
                </div>
                <div className="w-[400px] border h-[1000px] mx-auto my-4">
                    <div className="steering m-1">
                        <GiSteeringWheel className="ml-auto text-5xl" />
                    </div>
                    <hr />
                    <div className="grid grid-cols-2 gap-2">
                        <div className="left-col">
                            <div className="seat-row">
                                <div className="grid grid-cols-2">
                                    {seats.seat_layout[0].seats.map((seat) => (
                                        <div
                                            className="seat text-center"
                                            key={seat.seat_number}
                                        >
                                            <SeatIcon fill="fill-gray-100"></SeatIcon>
                                            <span>{seat.seat_number}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="right-col">
                            <div className="seat-row">
                                <div className="grid grid-cols-2">
                                    {seats.seat_layout[1].seats.map((seat) => (
                                        <div
                                            className="seat text-center"
                                            key={seat.seat_number}
                                        >
                                            <SeatIcon fill="fill-gray-100"></SeatIcon>
                                            <span>{seat.seat_number}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSeats;

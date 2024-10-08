import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
// import SeatIcon from "./SeatIcon";

const ViewSeats = () => {
    const [selectedSeat, setSelectedSeat] = useState([]);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();

    const seats = {
        seat_layout: [
            {
                row: 1,
                seats: [
                    {
                        seat_number: "A1",
                        status: "available",
                    },
                    {
                        seat_number: "A2",
                        status: "booked",
                    },
                    {
                        seat_number: "B1",
                        status: "booked",
                    },
                    {
                        seat_number: "B2",
                        status: "booked",
                    },
                    {
                        seat_number: "C1",
                        status: "available",
                    },
                    {
                        seat_number: "C2",
                        status: "available",
                    },
                    {
                        seat_number: "D1",
                        status: "available",
                    },
                    {
                        seat_number: "D2",
                        status: "available",
                    },
                    {
                        seat_number: "E1",
                        status: "available",
                    },
                    {
                        seat_number: "E2",
                        status: "available",
                    },
                    {
                        seat_number: "F1",
                        status: "available",
                    },
                    {
                        seat_number: "F2",
                        status: "available",
                    },
                    {
                        seat_number: "G1",
                        status: "available",
                    },
                    {
                        seat_number: "G2",
                        status: "available",
                    },
                    {
                        seat_number: "H1",
                        status: "available",
                    },
                    {
                        seat_number: "H2",
                        status: "available",
                    },
                    {
                        seat_number: "I1",
                        status: "available",
                    },
                    {
                        seat_number: "I2",
                        status: "available",
                    },
                    {
                        seat_number: "J1",
                        status: "available",
                    },
                    {
                        seat_number: "J2",
                        status: "available",
                    },
                ],
            },
            {
                row: 2,
                seats: [
                    {
                        seat_number: "K1",
                        status: "available",
                    },
                    {
                        seat_number: "K2",
                        status: "booked",
                    },
                    {
                        seat_number: "L1",
                        status: "available",
                    },
                    {
                        seat_number: "L2",
                        status: "available",
                    },
                    {
                        seat_number: "M1",
                        status: "available",
                    },
                    {
                        seat_number: "M2",
                        status: "available",
                    },
                    {
                        seat_number: "N1",
                        status: "available",
                    },
                    {
                        seat_number: "N2",
                        status: "available",
                    },
                    {
                        seat_number: "O1",
                        status: "available",
                    },
                    {
                        seat_number: "O2",
                        status: "available",
                    },
                    {
                        seat_number: "P1",
                        status: "available",
                    },
                    {
                        seat_number: "P2",
                        status: "available",
                    },
                    {
                        seat_number: "Q1",
                        status: "available",
                    },
                    {
                        seat_number: "Q2",
                        status: "available",
                    },
                    {
                        seat_number: "R1",
                        status: "available",
                    },
                    {
                        seat_number: "R2",
                        status: "available",
                    },
                    {
                        seat_number: "S1",
                        status: "available",
                    },
                    {
                        seat_number: "S2",
                        status: "available",
                    },
                    {
                        seat_number: "T1",
                        status: "available",
                    },
                    {
                        seat_number: "T2",
                        status: "available",
                    },
                ],
            },
        ],
    };
    const fare = 600;

    const handleSelectSeat = (seat) => {
        let newSeats = [];
        if (selectedSeat.includes(seat)) {
            newSeats = selectedSeat.filter((s) => s !== seat);
            setSelectedSeat(newSeats);
            console.log(newSeats, "if");
        } else {
            if (selectedSeat.length === 4)
                return alert("You can select maximum 4 seats at a time!");
            newSeats = [...selectedSeat, seat];
            setSelectedSeat(newSeats);
            console.log(newSeats);
        }
    };

    const onSubmit = (data) => {
        const newData = { ...data, selectedSeat };
        console.log(newData);
        navigate("/checkout");
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
                        <div className="arr time">
                            <p>Arrival:</p>
                            <h3>02:30 PM</h3>
                        </div>
                        <div className="date">
                            <p>Journey Date:</p>
                            <h3>12/05/2024</h3>
                        </div>
                        <div className="av-seats">
                            <p>Available Seats:</p>
                            <h3>25</h3>
                        </div>
                    </div>
                </div>
                <div className="div flex items-center justify-center gap-2 py-4 my-4 bg-base-200 rounded-sm">
                    <div className="seat-color flex items-center gap-2">
                        <div className="w-[30px] h-[30px] rounded-md bg-green-300"></div>{" "}
                        Available Seat
                    </div>
                    <div className="seat-color flex items-center gap-2">
                        <div className="w-[30px] h-[30px] rounded-md bg-red-200"></div>{" "}
                        Booked Seat
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 my-4">
                    <div className="">
                        <div className="mx-auto my-4 p-2 border">
                            <div className="steering m-1">
                                <GiSteeringWheel className="ml-auto text-5xl" />
                            </div>
                            <hr />
                            <div className="grid grid-cols-2 gap-6">
                                <div className="left-col">
                                    <div className="seat-row">
                                        <div className="grid grid-cols-2">
                                            {seats.seat_layout[0].seats.map(
                                                (seat) => (
                                                    <div
                                                        className="seat text-center"
                                                        key={seat.seat_number}
                                                    >
                                                        {/* <SeatIcon fill="fill-gray-100"></SeatIcon> */}
                                                        {seat.status ===
                                                        "booked" ? (
                                                            <button
                                                                className={`p-1 w-10/12 block border rounded-md mx-1 my-1 disabled:bg-red-200
                                                                    ${
                                                                        seat.status ===
                                                                        "available"
                                                                            ? "bg-green-300"
                                                                            : ""
                                                                    }`}
                                                                disabled
                                                                title="This seat is booked"
                                                            >
                                                                {
                                                                    seat.seat_number
                                                                }
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className={`p-1 w-10/12 block border rounded-md mx-1 my-1 bg-green-300  ${
                                                                    selectedSeat.includes(
                                                                        seat.seat_number
                                                                    ) === true
                                                                        ? "border-violet-950 border-2"
                                                                        : ""
                                                                }`}
                                                                onClick={() =>
                                                                    handleSelectSeat(
                                                                        seat.seat_number
                                                                    )
                                                                }
                                                            >
                                                                {
                                                                    seat.seat_number
                                                                }
                                                            </button>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="right-col">
                                    <div className="seat-row">
                                        <div className="grid grid-cols-2">
                                            {seats.seat_layout[1].seats.map(
                                                (seat) => (
                                                    <div
                                                        className="seat text-center"
                                                        key={seat.seat_number}
                                                    >
                                                        {/* <SeatIcon fill="fill-gray-100"></SeatIcon> */}
                                                        {seat.status ===
                                                        "booked" ? (
                                                            <button
                                                                className={`p-1 w-10/12 block border rounded-md mx-1 my-1 disabled:bg-red-200
                                                                   `}
                                                                disabled
                                                                title="This seat is booked"
                                                            >
                                                                {
                                                                    seat.seat_number
                                                                }
                                                            </button>
                                                        ) : (
                                                            <button
                                                                className={`p-1 w-10/12 block border rounded-md mx-1 my-1 bg-green-300  ${
                                                                    selectedSeat.includes(
                                                                        seat.seat_number
                                                                    ) === true
                                                                        ? "border-violet-950 border-2"
                                                                        : ""
                                                                }`}
                                                                onClick={() =>
                                                                    handleSelectSeat(
                                                                        seat.seat_number
                                                                    )
                                                                }
                                                            >
                                                                {
                                                                    seat.seat_number
                                                                }
                                                            </button>
                                                        )}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="col-span-2 grid grid-cols-2 gap-4
                        "
                    >
                        <div>
                            <div className="contact-info">
                                <h2 className="flex items-center gap-2 text-3xl font-medium justify-center uppercase">
                                    <MdOutlineContactPhone />
                                    Contact info:
                                </h2>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <FaPhoneAlt />
                                    Phone
                                    <input
                                        type="tel"
                                        className="grow w-full max-w-xs"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                    />
                                </label>
                            </div>

                            <h3 className="my-2 font-medium text-center text-2xl">
                                Passenger Details
                            </h3>
                            <div className="passenger-details">
                                {selectedSeat?.map((s, index) => (
                                    <div key={s} className="p-1 m-2">
                                        Passenger {index + 1}
                                        <label className="input input-bordered flex items-center gap-2 my-2">
                                            Full Name
                                            <input
                                                type="text"
                                                className="grow w-full max-w-xs"
                                                {...register(
                                                    `p${index + 1}_name`,
                                                    {
                                                        required: true,
                                                    }
                                                )}
                                            />
                                        </label>
                                        <label className=" flex items-center gap-2 my-2">
                                            <input
                                                type="radio"
                                                name="p1_gender"
                                                className="radio"
                                                {...register(
                                                    `p${index + 1}_gender`
                                                )}
                                                value={"male"}
                                                defaultChecked
                                            />
                                            Male
                                            <label className="  flex items-center gap-2 my-2">
                                                <input
                                                    type="radio"
                                                    name="p1_gender"
                                                    className="radio"
                                                    {...register(
                                                        `p${index + 1}_gender`
                                                    )}
                                                    value={"female"}
                                                />
                                                Female
                                            </label>
                                        </label>
                                    </div>
                                ))}

                                {/* {errors.phone?.type === "required" && (
                                    <div
                                        role="alert"
                                        className="alert alert-warning"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 stroke-current"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Phone is required!</span>
                                    </div>
                                )} */}
                            </div>
                        </div>
                        <div className="">
                            <div className="seat-selection">
                                <h3 className="font-medium text-3xl flex items-center gap-2 uppercase">
                                    <TbListDetails />
                                    Journey Details
                                </h3>
                                <div className="details mt-2">
                                    <div className="overflow-x-auto">
                                        <table className="table">
                                            {/* head */}

                                            <tbody>
                                                {/* row 1 */}
                                                <tr>
                                                    <td>Bus Id:</td>
                                                    <td>ENA25065</td>
                                                </tr>
                                                <tr>
                                                    <td>Fare:</td>
                                                    <td>{fare}/- (Per seat)</td>
                                                </tr>
                                                <tr>
                                                    <td>Selected Seats:</td>
                                                    <td>
                                                        <div>
                                                            {selectedSeat
                                                                ? selectedSeat.map(
                                                                      (s) => (
                                                                          <button
                                                                              key={
                                                                                  s
                                                                              }
                                                                              className={`p-1  border rounded-md mx-1 my-1 disabled:bg-red-200
                                                                   `}
                                                                              disabled
                                                                              title="This seat is booked"
                                                                          >
                                                                              {
                                                                                  s
                                                                              }
                                                                          </button>
                                                                      )
                                                                  )
                                                                : 0}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Total Cost:</td>
                                                    <td>
                                                        {selectedSeat
                                                            ? selectedSeat.length *
                                                              fare
                                                            : 0}
                                                        Tk
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="proceed-btn mt-4">
                                    {/* <Link to="/checkout"> */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary uppercase w-full"
                                        disabled={!selectedSeat.length}
                                    >
                                        Proceed to checkout
                                    </button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ViewSeats;

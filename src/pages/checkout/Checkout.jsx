import { useEffect, useState } from "react";
import bkash from "../../assets/bkash.png";
import nagad from "../../assets/nagad.png";
import rocket from "../../assets/rocket.png";

const Checkout = () => {
    const [selectPaymentMethod, setSelectPaymentMethod] = useState(null);
    const [timeLeft, setTimeLeft] = useState(300);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };
    const paymentMethods = [
        {
            id: 1,
            name: "bkash",
            image: bkash,
        },
        {
            id: 2,
            name: "nagad",
            image: nagad,
        },
        {
            id: 3,
            name: "rocket",
            image: rocket,
        },
        {
            id: 4,
            name: "devit/credit card",
            image: "https://w7.pngwing.com/pngs/48/549/png-transparent-swipe-card-icon-credit-card-bank-card-debit-card-money-card-card-material-blue-text-rectangle-thumbnail.png",
        },
    ];
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div className="container mx-auto">
                <div className="session-warning">
                    <div role="alert" className="alert">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info h-6 w-6 shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <span>
                            You must complete the payment in{" "}
                            {formatTime(timeLeft)} minutes.
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="payment-details border rounded-md">
                        <div className="details mt-2 p-2">
                            <h3 className="font-medium uppercase">
                                Payment Details
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Tiket Price:</td>
                                            <td>1000</td>
                                        </tr>
                                        <tr>
                                            <td>Processing Fee:</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <td>Discount: </td>
                                            <td>0</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span className="font-medium text-2xl uppercase">
                                                    Total Payable:
                                                </span>
                                            </td>

                                            <td>
                                                <span className="font-medium text-2xl uppercase">
                                                    1020 Tk
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="payment-methods">
                        <h3 className="font-medium">Select Payment Method</h3>
                        <div className="methods">
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {paymentMethods.map((method) => (
                                    <div
                                        key={method.id}
                                        className={`flex items-center gap-2 h-[50px] border rounded-md hover:cursor-pointer ${
                                            selectPaymentMethod === method.name
                                                ? "border-2 border-green-600"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setSelectPaymentMethod(method.name)
                                        }
                                    >
                                        <div className="ml-2 logo w-[30px]">
                                            <img
                                                src={method.image}
                                                alt={method?.name}
                                            />
                                        </div>
                                        <h4 className="capitalize">
                                            {method.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="agreement mt-2">
                            <label htmlFor="agreemnet">
                                <input
                                    type="checkbox"
                                    name="agreemnet"
                                    id="agreemnet"
                                    className="w-[20px]"
                                    onChange={() => setChecked(!checked)}
                                />
                                I am confirming that I have read, acknowledged
                                and agree to the Terms of Use, Privacy Policy of
                                Desh Ticket
                            </label>
                        </div>
                        <div className="proceed-to-payment mt-2">
                            <button
                                className="btn btn-primary w-full uppercase text-xl"
                                disabled={!checked || !selectPaymentMethod}
                            >
                                Proceed To Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

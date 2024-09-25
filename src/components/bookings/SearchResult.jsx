// eslint-disable-next-line no-unused-vars
import React from "react";
import bus from "../../assets/bus.png";
import { Link } from "react-router-dom";
const SearchResult = () => {
    return (
        <div>
            <h2>Search Results</h2>
            <div className="results">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Bus Name {"(Type)"}</th>
                                <th>Dep. Time</th>
                                <th>Arr. Time</th>
                                <th>Available Seats</th>
                                <th>Fare</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={bus}
                                                    alt="Bus Image"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                Ena Transport
                                            </div>
                                            <div className="text-sm opacity-50">
                                                AC
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>6:30 AM</span>
                                </td>
                                <td>1:00 PM</td>
                                <td>
                                    <div>36</div>
                                    <Link to={"/view-seats"}>
                                        <button className="btn btn-xs border">
                                            View Seats
                                        </button>{" "}
                                    </Link>
                                </td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={bus}
                                                    alt="Bus Image"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                Ena Transport
                                            </div>
                                            <div className="text-sm opacity-50">
                                                AC
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>6:30 AM</span>
                                </td>
                                <td>1:00 PM</td>
                                <td>
                                    <div>36</div>
                                    <Link to={"/view-seats"}>
                                        <button className="btn btn-xs border">
                                            View Seats
                                        </button>{" "}
                                    </Link>
                                </td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={bus}
                                                    alt="Bus Image"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                Ena Transport
                                            </div>
                                            <div className="text-sm opacity-50">
                                                AC
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>6:30 AM</span>
                                </td>
                                <td>1:00 PM</td>
                                <td>
                                    <div>36</div>{" "}
                                    <Link to={"/view-seats"}>
                                        <button className="btn btn-xs border">
                                            View Seats
                                        </button>{" "}
                                    </Link>
                                </td>
                                <td>600</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={bus}
                                                    alt="Bus Image"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                Ena Transport
                                            </div>
                                            <div className="text-sm opacity-50">
                                                AC
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>6:30 AM</span>
                                </td>
                                <td>1:00 PM</td>
                                <td>
                                    <div>36</div>
                                    <Link to={"/view-seats"}>
                                        <button className="btn btn-xs border">
                                            View Seats
                                        </button>{" "}
                                    </Link>
                                </td>
                                <td>600</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;

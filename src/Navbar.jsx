// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to="/" className="btn btn-ghost text-xl">
                            D Tickets
                        </Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link to="/booking">Book Ticket</Link>
                            </li>
                            <li>
                                <details>
                                    <summary>Links</summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li>
                                            <Link to="/">Refund Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/">About</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

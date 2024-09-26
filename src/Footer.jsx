import { GiTicket } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <div className="border-t mt-4">
                <footer className="footer bg-base-200 text-base-content p-10">
                    <aside>
                        <GiTicket className="text-5xl" />

                        <p>
                            <span className="text-3xl font-medium">
                                Desh Ticket
                            </span>
                            <br />
                            Your gateway to unforgettable experiences. <br />{" "}
                            Browse, book, and embark on your next adventure with
                            ease.
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <Link to="term-of-use">Terms of use</Link>

                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;

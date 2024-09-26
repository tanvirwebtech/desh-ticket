const TermOfUse = () => {
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-center text-4xl font-bold">Terms of Use</h1>
                <p>
                    <strong>Effective Date:</strong> 01/01/2024
                </p>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        1. Acceptance of Terms
                    </h2>
                    <p>
                        By accessing the Platform, you acknowledge that you have
                        read, understood, and agree to be bound by these Terms
                        of Use and our Privacy Policy. We reserve the right to
                        modify these terms at any time, and any changes will be
                        effective upon posting.
                    </p>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        2. Services Provided
                    </h2>
                    <p>
                        Desh Ticket offers an online platform for users to
                        search, compare, and purchase bus tickets from various
                        bus operators. We act solely as a booking facilitator
                        between you and the bus operators and are not
                        responsible for the operation of the bus services.
                    </p>

                    <h3>2.1 Ticket Booking</h3>
                    <ul>
                        <li>
                            All bookings made on Desh Ticket are subject to
                            availability and confirmation by the respective bus
                            operators.
                        </li>
                        <li>
                            Desh Ticket reserves the right to refuse bookings at
                            its discretion.
                        </li>
                    </ul>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        3. User Responsibilities
                    </h2>

                    <h3>3.1 Accuracy of Information</h3>
                    <p>
                        When creating an account or booking a ticket, you agree
                        to provide accurate, current, and complete information.
                        You are responsible for ensuring that your contact
                        details and other personal information remain updated.
                    </p>

                    <h3>3.2 Account Security</h3>
                    <p>
                        You are responsible for maintaining the confidentiality
                        of your account information, including your password.
                        Any activity under your account will be your
                        responsibility. If you suspect unauthorized use, you
                        must notify us immediately.
                    </p>

                    <h3>3.3 Prohibited Conduct</h3>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Use the Platform for unlawful purposes.</li>
                        <li>
                            Interfere with the security or integrity of the
                            Platform.
                        </li>
                        <li>Make any fraudulent transactions.</li>
                    </ul>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        4. Ticket Cancellation and Refunds
                    </h2>

                    <h3>4.1 Cancellation Policy</h3>
                    <ul>
                        <li>
                            Tickets may be canceled subject to the cancellation
                            policy of the bus operator. Please check the
                            cancellation terms before making a booking.
                        </li>
                        <li>
                            Desh Ticket may charge a service fee for
                            cancellations.
                        </li>
                    </ul>

                    <h3>4.2 Refunds</h3>
                    <ul>
                        <li>
                            Refunds for canceled tickets will be processed as
                            per the bus {"operator's"} policy. Desh Ticket will
                            not be liable for any delays in refund processing.
                        </li>
                        <li>Refunds may be subject to administrative fees.</li>
                    </ul>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        5. Pricing and Payment
                    </h2>
                    <ul>
                        <li>
                            All prices displayed on the Platform are in BDT and
                            include applicable taxes, unless otherwise stated.
                        </li>
                        <li>
                            Payments must be made using the payment methods
                            available on the Platform. Desh Ticket is not
                            responsible for any payment processing errors or
                            issues with third-party payment processors.
                        </li>
                    </ul>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        6. Limitation of Liability
                    </h2>
                    <p>
                        Desh Ticket is a booking platform and is not responsible
                        for the actual bus service, delays, cancellations, or
                        other issues arising from the bus{" operator's "}
                        service. By using the Platform, you agree that Desh
                        Ticket will not be held liable for:
                    </p>
                    <ul>
                        <li>
                            Any damages, losses, or inconveniences resulting
                            from bus service delays, cancellations, or
                            accidents.
                        </li>
                        <li>
                            Any inaccuracies in the information provided by bus
                            operators.
                        </li>
                    </ul>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        7. Intellectual Property
                    </h2>
                    <p>
                        All content on the Platform, including but not limited
                        to logos, images, text, software, and graphics, is owned
                        by Desh Ticket or its licensors. You may not reproduce,
                        modify, distribute, or use any content without prior
                        written consent from Desh Ticket.
                    </p>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        8. Termination
                    </h2>
                    <p>
                        Desh Ticket reserves the right to suspend or terminate
                        your access to the Platform at any time, without prior
                        notice, for any breach of these Terms of Use or for
                        other reasons at our discretion.
                    </p>
                </section>

                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        9. Governing Law
                    </h2>
                    <p>
                        These Terms of Use shall be governed by and construed in
                        accordance with the laws of Bangladesh. Any disputes
                        arising out of or in connection with these terms shall
                        be subject to the exclusive jurisdiction of the courts
                        in Dhaka, Bangladesh.
                    </p>
                </section>
                <section className="mt-4">
                    <h2 className="font-medium text-2xl my-2">
                        10. Contact Us
                    </h2>
                    <p>
                        If you have any questions about these Terms of Use,
                        please contact us at:
                    </p>
                    <address>
                        <strong>Desh Ticket</strong>
                        <p>Dhaka, Bangladesh</p>
                        <p>Email: contact@deshticket.com</p>
                        <p>Phone: 01234567890</p>
                    </address>
                </section>
            </div>
        </div>
    );
};

export default TermOfUse;

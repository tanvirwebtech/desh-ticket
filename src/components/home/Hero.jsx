import heroBg from "../../assets/hero-bg.svg";
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="grid grid-cols-2 gap-3">
                <div className="h-full">
                    <div className="hero-content text-center h-full">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">
                                Welcome to Desh Ticket!
                            </h1>
                            <p className="py-6">
                                Your gateway to unforgettable experiences.
                                Browse, book, and embark on your next adventure
                                with ease.
                            </p>
                            <button className="btn btn-primary">
                                Buy Tickets
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="bg-img opacity-25">
                        <img src={heroBg} alt="Destination" className="w-3/4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

import { useEffect, useState } from "react";
const useSessionTimer = () => {
    const [sessionActive, setSessionActive] = useState(false);

    // Function to start the session
    const startSession = () => {
        const expiryTime = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now
        localStorage.setItem("sessionExpiry", JSON.stringify(expiryTime));
        setSessionActive(true);

        // Set a timeout to clear session after 5 minutes
        setTimeout(() => {
            clearSession();
        }, 5 * 60 * 1000);
    };

    // Function to clear the session
    const clearSession = () => {
        localStorage.removeItem("sessionExpiry");
        setSessionActive(false);
    };

    // Check session validity on component mount
    useEffect(() => {
        const expiryTimeString = localStorage.getItem("sessionExpiry");
        const expiryTime = JSON.parse(expiryTimeString);
        if (expiryTime && new Date().getTime() < expiryTime) {
            setSessionActive(true);

            // Calculate remaining time and set timeout to clear the session
            const remainingTime = expiryTime - new Date().getTime();
            setTimeout(() => {
                clearSession();
            }, remainingTime);
        }
    }, []);

    return { startSession, sessionActive, clearSession };
};

export default useSessionTimer;

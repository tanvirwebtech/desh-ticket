import { useEffect, useState } from "react";

const useCities = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch("city.json")
            .then((res) => res.json())
            .then((data) => setCities(data));
    }, []);

    return { cities };
};
export default useCities;

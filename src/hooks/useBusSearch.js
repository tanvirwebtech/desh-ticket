import { useState } from "react";

const useBusSearch = () => {
    const [searchResult, setSearchResult] = useState(null);
    return { searchResult, setSearchResult };
};

export default useBusSearch;

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import useCities from "../../hooks/useCities";
const SearchForm = () => {
    const { cities } = useCities();
    const [startDate, setStartDate] = useState(new Date());
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const journeyDate = startDate.toLocaleDateString();
        const newData = { ...data, journeyDate };
        console.log(newData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="search-bar grid lg:grid-cols-3 gap-4 mt-4">
                <div className="from-city">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">From</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter City"
                            list="city"
                            className="input input-bordered w-full max-w-xs"
                            {...register("fromCity")}
                        />
                        <datalist id="city">
                            {cities?.map((city) => (
                                <option value={city?.name} key={city?.id}>
                                    {city?.name}
                                </option>
                            ))}
                        </datalist>
                    </label>
                </div>
                <div className="to-city">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">To</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter City"
                            list="city"
                            className="input input-bordered w-full max-w-xs"
                            {...register("toCity", {
                                required: true,
                            })}
                        />
                        {errors.toCity && <span>This field is required</span>}
                        <datalist id="city">
                            {cities?.map((city) => (
                                <option value={city?.name} key={city?.id}>
                                    {city?.name}
                                </option>
                            ))}
                        </datalist>
                    </label>
                </div>
                <div className="date">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Journey Date</span>
                        </div>
                    </label>
                    <DatePicker
                        showIcon
                        selected={startDate}
                        minDate={new Date()}
                        onChange={(date) => setStartDate(date)}
                        className="p-2 bg-base-100 border"
                    />
                </div>
            </div>
            <div className="search-btn flex justify-center">
                <div className="mt-4">
                    <button
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg "
                        type="submit"
                    >
                        Search Bus
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;

import React, { useEffect, useState } from "react";
// import bookService from "../../API/bookService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import doctorservice from "../../API/doctorService";
import appointmentService from "../../API/appointmentService";

const AddDoctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const getDoctors = async () => {
            try {
                const response = await doctorservice.fetchAll()
                setDoctors(response.doctors)
            }
            catch (e) {

            }
        }
        getDoctors()
    }, [])

    const navigate = useNavigate()

    const [data, setData] = useState({
        name: "",
        date: "",

    });
    const [errors, setErrors] = useState({
        name: false,
        date: false
    });

    const handleChange = (e) => {
        setData((d) => ({ ...d, [e.target.name]: e.target.value }));
        if (e.target.value.length > 0) {
            setErrors((prevState) => ({ ...prevState, [e.target.name]: false }));
        }
    };

    const [regex, setRegex] = useState({

        name: /.{1,50}$/,
        date: /.{1,50}$/

    });
    const submit = () => {
        console.log(data);
        let hasError = false;

        Object.keys(data).forEach((v) => {  // Use forEach instead of map, since map is used for returning values.
            if (!regex[v].test(data[v])) {
                setErrors((prevState) => ({ ...prevState, [v]: true }));
                hasError = true;
            }
        });

        if (hasError) {
            toast.error("Please Fill all the desired fields");
        } else {
            appointmentService.create(data).then(res => {
                navigate('/appointments')
            })
        }
    };



    return (
        <div>

            <div className="  bg-[#d4d3db] h-screen py-4 px-48">
                <div className="bg-[#FFFFFF] px-10 py-10 rounded-2xl flex flex-col items-center">
                    <h1 className={`text-[#FF6E40] font-[800] uppercase text-[25px]`}>
                        Add Doctors
                    </h1>
                    <div className="bg-gray-300 h-[1px] w-full mb-5"></div>
                    <div className="grid gap-1  w-[90%]">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    {" "}
                                    Doctor Name{" "}
                                </label>

                                <select
                                    value={data.name}
                                    name="name"
                                    onChange={handleChange}
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"

                                >
                                    <option value="" disabled>Select a Doctor </option>
                                    {doctors.map(v => (
                                        <option value={v._id}>{v.name}</option>
                                    ))}
                                </select>

                            </div>

                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">


                            <div>
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    Appointment Date
                                </label>
                                <input
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                    type="date"
                                    name="date"
                                    value={data.date}
                                    onChange={handleChange}
                                    placeholder="Enter Date"
                                />

                            </div>
                        </div>


                        <div className="flex justify-center mt-5">
                            <button
                                className="text-white bg-[#FF6E40] hover:shadow-lg duration-300  hover:shadow-gray-400 rounded-xl px-10 py-2"
                                onClick={() => submit()}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddDoctors
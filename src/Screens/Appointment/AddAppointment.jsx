import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import doctorService from "../../API/doctorService";
import appointmentService from "../../API/appointmentService";

const AddDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const response = await doctorService.fetchAll();
                setDoctors(response.doctors);
            } catch (e) {
                console.error(e);
            }
        };
        getDoctors();
    }, []);

    const navigate = useNavigate();

    const [data, setData] = useState({
        doctor: "", // ID from options
        appointment_date: "", // Selected by user
        patient: localStorage.getItem("userId"), // Get patient from localStorage
    });

    const [errors, setErrors] = useState({
        doctor: false,
        appointment_date: false,
    });

    const handleChange = (e) => {
        setData((d) => ({ ...d, [e.target.name]: e.target.value }));
        if (e.target.value.length > 0) {
            setErrors((prevState) => ({ ...prevState, [e.target.name]: false }));
        }
    };

    const [regex, setRegex] = useState({
        doctor: /.{1,50}$/,
        appointment_date: /.{1,50}$/,
    });

    const submit = () => {
        console.log(data);
        let hasError = false;

        // Ensure regex exists for every field
        Object.keys(data).forEach((v) => {
            if (regex[v] && !regex[v].test(data[v])) {
                setErrors((prevState) => ({ ...prevState, [v]: true }));
                hasError = true;
            }
        });

        if (hasError) {
            toast.error("Please fill all the required fields");
        } else {
            // Fetch patient ID from localStorage
            const patientId = localStorage.getItem("userId");

            // Prepare data with patientId
            const requestData = {
                ...data,
                patient: patientId,
            };

            appointmentService.create(requestData).then((res) => {
                if (res.status === 201) {
                    toast.success('Request Sent. You will be notified Shortly')
                }

            });
            navigate('/')
        }
    };



    return (
        <div>
            <div className="bg-[#d4d3db] h-screen py-4 px-48">
                <div className="bg-[#FFFFFF] px-10 py-10 rounded-2xl flex flex-col items-center">
                    <h1 className="text-[#FF6E40] font-[800] uppercase text-[25px]">
                        Add Doctors
                    </h1>
                    <div className="bg-gray-300 h-[1px] w-full mb-5"></div>
                    <div className="grid gap-1 w-[90%]">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    Doctor Name
                                </label>
                                <select
                                    value={data.doctor}
                                    name="doctor" // Corrected to match the state property
                                    onChange={handleChange}
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                >
                                    <option value="" disabled>
                                        Select a Doctor
                                    </option>
                                    {doctors.map((v) => (
                                        <option key={v._id} value={v._id}>
                                            {v.name}
                                        </option>
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
                                    type="date" // Changed to 'date' type for appointment date
                                    name="appointment_date"
                                    value={data.appointment_date}
                                    onChange={handleChange}
                                    placeholder="Select appointment date"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button
                                className="text-white bg-[#FF6E40] hover:shadow-lg duration-300 hover:shadow-gray-400 rounded-xl px-10 py-2"
                                onClick={submit}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctors;

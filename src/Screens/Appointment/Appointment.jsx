import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import doctorservice from '../../API/doctorService';
// import bookService from '../../API/bookService';

// const departments = [
//     { name: "Rabbit and Carrot ", author: "Nouman", price: "1000" },
//     { name: "My Life ", author: "Bilal", price: "5000" },
//     { name: "Leadership ", author: "tayyab", price: "2000" },
//     { name: "IT ", author: "haseeb", price: "2500" },
// ];

// const doctor = [
//     { name: "Bilal Musatafa", email: "mnbm@gmail.com", phone: "033045" },
//     { name: "Bilal Musatafa", email: "mnbm@gmail.com", phone: "033045" },
//     { name: "Bilal Musatafa", email: "mnbm@gmail.com", phone: "033045" },

// ]



const Appointment = () => {

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
    return (
        <div className=" w-full px-24 py-12">
            <h1 className="text-center mt-[-20px] text-[40px] font-bold">
                Appointments
            </h1>
            <div className="mt-10 flex flex-row justify-between bg-white px-6 py-4 items-center rounded-xl shadow-lg shadow-gray-200">

                <div className=" items-center">
                    <button
                        className="w-52 bg-[#690000] px-10 py-3 rounded-xl text-white font-semibold duration-300 shadow-lg hover:shadow-gray-400"
                        onClick={() => navigate("/appointment/add")}
                    >
                        {" "}
                        Book appointment
                    </button>
                </div>
            </div>
            <div className=" flex flex-col">
                <div className="mt-10">
                    <table className="rounded-lg border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-[#690000] uppercase text-sm leading-normal w-full text-white">
                                <th className="rounded-l-lg p-[2%] text-left text-[13px] w-[8%]">
                                    Doctor Name
                                </th>
                                <th className=" p-[2%] text-left text-[13px] w-[8%]">
                                    Patient Name
                                </th>
                                <th className=" p-[2%] text-left text-[13px] w-[8%]">
                                    Appointment Date
                                </th>

                                {/* <th className="rounded-r-lg p-[2%] text-left text-[13px] w-[2%]">
                                    Actions
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((data, index) => (
                                <tr key={index}>
                                    <td className="rounded-l-lg p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.name}
                                    </td>
                                    <td className="rounded-l-lg p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.phone_no}
                                    </td>
                                    <td className="rounded-l-lg p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.email}
                                    </td>
                                    {/* <td className="rounded-r-lg p-[2%] text-left text-[13px] w-[3%] bg-white">
                                        <div className="flex flex-row gap-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="blue"
                                                class="size-5 hover:scale-110 duration-300 cursor-pointer"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="red"
                                                class="size-5 hover:scale-110 duration-300 cursor-pointer"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </div>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default Appointment
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import appointmentService from '../../API/appointmentService';

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const patientId = localStorage.getItem('userId')

    useEffect(() => {
        const getAppointments = async () => {
            try {
                const response = await appointmentService.fetchAll(patientId);
                console.log(response)
                setAppointments(response.appointments); // Fetch and set appointments correctly
            } catch (e) {
                console.error(e); // Log errors for debugging
            }
        };
        getAppointments();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="w-full px-24 py-12">
            <h1 className="text-center mt-[-20px] text-[40px] font-bold">
                Appointments
            </h1>
            <div className="mt-10 flex flex-row justify-between bg-white px-6 py-4 items-center rounded-xl shadow-lg shadow-gray-200">
                <div className="items-center">
                    <button
                        className="w-52 bg-[#690000] px-10 py-3 rounded-xl text-white font-semibold duration-300 shadow-lg hover:shadow-gray-400"
                        onClick={() => navigate("/appointment/add")}
                    >
                        Book appointment
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mt-10">
                    <table className="rounded-lg border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-[#690000] uppercase text-sm leading-normal w-full text-white">
                                <th className="rounded-l-lg p-[2%] text-left text-[13px] w-[8%]">Doctor Name</th>
                                <th className="p-[2%] text-left text-[13px] w-[8%]">Patient ID</th>
                                <th className="p-[2%] text-left text-[13px] w-[8%]">Appointment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((data, index) => (
                                <tr key={index}>
                                    <td className="rounded-l-lg p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.doctor.name} {/* Corrected to show doctor's name */}
                                    </td>
                                    <td className="p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.patient} {/* Display patient ID (adjust according to your needs) */}
                                    </td>
                                    <td className="rounded-l-lg p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.appointment_date} {/* Correct field for appointment date */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Appointment;

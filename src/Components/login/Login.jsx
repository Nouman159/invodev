import { useState } from 'react';
//import userService from '../../API/userService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [registerdata, setRegisterdata] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegisterdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
       // userService.create(registerdata).then(() => navigate('/login'));
    };

    return (
        <div className="flex min-h-screen bg-gray-100 items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login here</h2>

                <form onSubmit={submitHandler} className="space-y-6">
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={registerdata.email}
                            onChange={changeHandler}
                            className="peer block w-full py-2 px-3 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                            placeholder=" "
                            id="email"
                            required
                        />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 left-3 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600">Email</label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            value={registerdata.password}
                            onChange={changeHandler}
                            className="peer block w-full py-2 px-3 text-sm text-gray-900 bg-gray-100 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600"
                            id="password"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 left-3 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600">Password</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

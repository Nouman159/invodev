import { useState } from 'react';
//import userService from '../../API/userService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    const [registerdata, setRegisterdata] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        age: ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegisterdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
      //  userService.create(registerdata).then(() => navigate('/login'));
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Form Section */}
            <div className="flex-1 flex items-center justify-center p-8 bg-white">
                <form onSubmit={submitHandler} className="w-full max-w-lg bg-white p-10 rounded-lg shadow-lg space-y-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>

                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={registerdata.name}
                            onChange={changeHandler}
                            className="peer block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Enter name"
                            id="name"
                            required
                        />
                        <label htmlFor="name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">name</label>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={registerdata.email}
                            onChange={changeHandler}
                            className="peer block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Enter email"
                            id="email"
                            required
                        />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Email</label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            value={registerdata.password}
                            onChange={changeHandler}
                            className="peer block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            id="password"
                            placeholder="Enter password"
                            required
                        />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Password</label>
                    </div>

                    <div className="relative">
                        <select
                            name="gender"
                            id="gender"
                            value={registerdata.gender}
                            onChange={changeHandler}
                            className="block w-full py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                        >
                            <option value="" disabled>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <label htmlFor="gender" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Gender</label>
                    </div>

                    <div className="relative">
                        <input
                            type="number"
                            name="age"
                            value={registerdata.age}
                            onChange={changeHandler}
                            className="peer block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Enter age"
                            id="age"
                            required
                        />
                        <label htmlFor="phone_no" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">age</label>
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

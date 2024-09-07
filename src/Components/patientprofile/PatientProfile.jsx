import { useState } from 'react';

export default function PatientProfile() {
 
    const data = {
        name: "John Doe",
        gender: "Male",
        age: "30"
    };

    return (
        <div className="flex items-start justify-start min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-center mb-4">
                    <h1 className="text-6xl">🙎🏻‍♂️</h1>
                </div>
                <div className="space-y-4 grid columns-2 ">
                  


                    <div>
                        <h1 className="text-lg font-semibold text-gray-700 mb-2">Name</h1>
                        <h2 className="text-xl text-gray-900 border-b-2 border-gray-300 pb-2">{data.name}</h2>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <h1 className="text-lg font-semibold text-gray-700 mb-2">Gender</h1>
                        <h2 className="text-xl text-gray-900 border-b-2 border-gray-300 pb-2">{data.gender}</h2>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold text-gray-700 mb-2">Age</h1>
                        <h2 className="text-xl text-gray-900 border-b-2 border-gray-300 pb-2">{data.age}</h2>
                    </div>




                </div>
            </div>
        </div>
    );
}

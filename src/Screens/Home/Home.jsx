import React from 'react';
import image from '../../Assets/bg-black.jpeg'

const Home = () => {
    return (
        <div className="App bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className='flex justify-between h-[640px] bg-cover bg-center'>
                {/* Content goes here */}
                <div className='w-[50%]'>

                    <div className='pt-20 ml-20 font-extrabold  h-full text-black text-7xl'>
                        Welcome to
                        <div className='uppercase text-8xl'>
                            Health Care
                        </div>
                        <p className='text-2xl font-medium mt-10 w-[80%]'>
                            Access your personalized health dashboard to manage appointments, view medical records, and stay connected with your doctors. Your health, your control—start navigating towards a healthier future today!
                        </p>
                    </div>
                </div>
                <div className='mt-56 mr-40'>
                    <img src={require('../../Assets/vec_2.png')} />
                </div>
            </div>
        </div>
    );
}

export default Home;
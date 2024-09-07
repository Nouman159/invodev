import React from 'react';
import image from '../../Assets/bg-black.jpeg'

const Home = () => {
    return (
        <div className="App bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className='flex justify-between h-[640px] bg-cover bg-center'>
                {/* Content goes here */}
                <div className='w-[50%]'>

                    <div className='pt-32 ml-20 font-extrabold  h-full text-black text-7xl'>
                        Welcome to
                        <div className='uppercase text-9xl'>
                            Store
                        </div>
                        <p className='text-2xl font-medium mt-10 w-[75%]'>
                            Welcome to [Store Name], your one-stop shop for [product or service focus]. We are committed to offering high-quality products, excellent customer service, and a shopping experience tailored to your needs.
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
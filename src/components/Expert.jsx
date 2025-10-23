import { Star } from 'lucide-react';
import React from 'react';

const Expert = ({expert}) => {
    const { name, specialization, experience, email, rating, image } = expert
    return (
        <div>
            <div className="card h-[320px] rounded-4xl bg-[#f6f9ff] shadow-sm hover:scale-103 p-1 md:p-2 1s ease-in-out ">
                <figure>
                    <img className='h-[70px] w-[70px] md:h-[90px] md:w-[90px] rounded-[50%] object-cover'
                        src={image}
                        alt="experts" />
                </figure>
                <div className="card-body ">
                    <div className='flex-1 flex flex-col justify-center items-start gap-2 '>
                        <h2 className="card-title text-center text-slate-600">{name}</h2>
                        <p className='text-gray-500 '>Email: {email}</p>
                        <p className='text-gray-500 '>Specialized at: {specialization}</p>
                        <p className='text-gray-500 '>Experience: {experience}</p>
                        <p className='text-gray-500 flex items-center gap-2'>Rating: {rating} <Star className='fill-amber-500 text-amber-500' /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;
import { Star } from 'lucide-react';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {

    const { serviceId, serviceName, price, rating, image } = service
    return (
        <div>
            <div className="card h-[300px] w-[300px] md:h-[310px] md:w-[310px] rounded-[50%] bg-[#E5EEFF] shadow-sm hover:scale-103 p-1 md:p-2 1s ease-in-out ">
                <figure>
                    <img className='h-[70px] w-[70px] md:h-[80px] md:w-[80px] rounded-[50%]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <div className='flex flex-col justify-center items-center gap-1 min-h-full'>
                        <div className='flex-1 flex flex-col justify-center items-center gap-2 '>
                            <h2 className="card-title text-center text-xl text-blue-950">{serviceName}</h2>
                            <p className='flex items-center gap-2 '>Rating : {rating} <Star className='fill-amber-500 text-amber-500' /></p>
                            <p className=''>Price :  $ {price}</p>
                        </div>
                        <div className="card-actions ">
                            <button className="btn px-3  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-800 ">
                                <Link to={`/service-details/${serviceId}`}>View Details</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
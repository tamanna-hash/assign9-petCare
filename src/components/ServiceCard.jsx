import { Star } from 'lucide-react';
import React, { useEffect } from 'react';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServiceCard = ({ service }) => {

    const { serviceId, serviceName, price, rating, image } = service
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration (ms)
            once: true,     // animation happens only once
        });
    }, []);
    return (
        <div data-aos="zoom-in">
            <div className="card max-h-[250px] max-w-[250px] md:max-h-[300px] md:max-w-[300px] rounded-[50%] bg-[#E5EEFF] shadow-sm hover:scale-103 p-1 md:p-2 1s ease-in-out ">
                <figure className=''>
                    <img className='h-[60px] w-[60px] md:h-[60px] md:w-[60px] lg:h-[90px] lg:w-[90px] rounded-[50%]'
                        src={image}
                        alt="serviceImg" />
                </figure>
                <div className="card-body gap-0  lg:gap-2 ">
                    <div className='flex flex-col justify-center items-center gap-1 min-h-full'>
                        <div className='flex-1 flex flex-col justify-center items-center lg::gap-2 '>
                            <h2 className="card-title text-center lg:text-lg text-blue-950">{serviceName}</h2>
                            <p className='flex items-center gap-2 '>Rating : {rating} <Star className='fill-amber-500 text-amber-500' /></p>
                            <p className=''>Price :  $ {price}</p>
                        </div>
                        <div className="card-actions ">
                            <button className="btn btn-sm md:btn-md  md:px-3  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-800 ">
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
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import BookNow from '../components/BookNow';
import { Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServiceDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    const [service, setService] = useState({});
    useEffect(() => {
        const serviceDetails = data.find((singleService) => singleService.serviceId == id);
        console.log(serviceDetails);
        setService(serviceDetails);
    }, [data, id]);
    const { serviceName, price, rating, providerName,
        providerEmail, slotsAvailable, description, image, category } = service
    return (
        <div className='bg-[#f4faff]'>
            <Navbar></Navbar>
            <div className="max-container fredoka">
                <div className='flex flex-col md:flex-row gap-6 items-start justify-evenly p-3'>
                    <div className='max-w-[600px] p-3 flex flex-col gap-2 items-start justify-between text-[#496ead]'>
                        <h1 className='text-3xl font-bold mb-4 text-[#6baef0] text-center'>Category: {category}</h1>
                        <h2 className="text-center text-2xl text-[#428bd4] font-semibold">{serviceName}</h2>
                        <img
                            className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-2xl"
                            src={image}
                            alt="serviceImg"
                        />
                        <h2 className="text-center text-lg font-semibold">Provider: {providerName}</h2>
                        <p className='text-lg font-semibold '>Email: {providerEmail}</p>
                        <p className='flex items-center gap-2 text-lg font-semibold '>Rating : {rating} <Star className='fill-amber-500 text-amber-500' /></p>
                        <p className='text-lg font-semibold'>Price :  $ {price}</p>
                        <p className='text-lg font-semibold'>Slots Available {slotsAvailable}</p>

                        <p className='text-lg font-semibold'>Description: {description}</p>
                        <Link className="btn  px-5  hover:bg-blue-200  bg-blue-100 font-semibold text-blue-900 " to={`/`}>
                            {" "}
                            Back to Home
                        </Link>
                    </div>
                    <div className=''>
                        <BookNow></BookNow>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;
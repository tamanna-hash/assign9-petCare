import React, { Suspense, use } from 'react';
import ServiceCard from '../components/ServiceCard';
const sevicesPromise = fetch('/services.json').then(res => res.json())
const Services = () => {
    const services = use(sevicesPromise)
    
    return (
        <div>
            <div className='fredoka max-container flex justify-center'>
                <div>
                    <h1 className='title text-blue-900'>Popular Winter Care Services</h1>
                    <Suspense fallback='loading'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-12 justify-between'>
                            {services.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)}
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Services;
import React, { use } from 'react';
import Expert from './Expert';
const expertsPromise = fetch('/experts.json').then(res => res.json())
const Experts = () => {
    const experts = use(expertsPromise)
    return (
        <div className='bg-[#eef4ff]'>  
            <div className='max-container fredoka flex-col'>
                <h1 className='title text-[#0b347b]'>Meet Our Expert Vets</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4'>
                    {experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)}
                </div>
            </div>
        </div>
    );
};

export default Experts;
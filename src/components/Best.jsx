import { Dog, PawPrint, SquareScissors, SquareScissorsIcon } from 'lucide-react';
import React from 'react';
import { FaDog } from 'react-icons/fa';
import { GiJumpingDog } from 'react-icons/gi';

const Best = () => {
    return (
        <div>
            <div className='max-container fredoka flex flex-col'>
                <div className=''>
                    <h1 className='title text-[#082659] '>We are best in:</h1>
                    <div className='grid max-w-[1080px] mx-auto grid-cols-2 md:grid-cols-5 justify-between gap-2 md:gap-0 '>
                        <div className='flex items-center hover:scale-103 justify-center flex-col gap-2 bg-blue-100 h-[100px] w-[100px] md:h-36 md:w-36 rounded-4xl'>
                            <div className='best'><Dog className='best-i'/></div>
                            <h1 className='best-h1'>Daycare</h1>
                        </div>
                        <div className='flex items-center hover:scale-103 justify-center flex-col gap-2 bg-blue-100 h-[100px] w-[100px] md:h-36 md:w-36 rounded-4xl'>
                            <div><FaDog className='best-i' /></div>
                            <h1 className='best-h1'>Dog Walking</h1>
                        </div>
                        <div className='flex items-center hover:scale-103 justify-center flex-col gap-2 bg-blue-100 h-[100px] w-[100px] md:h-36 md:w-36 rounded-4xl'>
                            <div><SquareScissorsIcon className='best-i' /></div>
                            <h1 className='best-h1'>Grooming</h1>
                        </div>
                        <div className='flex items-center hover:scale-103 justify-center flex-col gap-2 bg-blue-100 h-[100px] w-[100px] md:h-36 md:w-36 rounded-4xl'>
                            <div><GiJumpingDog className='best-i'/></div>
                            <h1 className='best-h1'>Training</h1>
                        </div>
                        <div className='flex items-center hover:scale-103 justify-center flex-col gap-2 bg-blue-100 h-[100px] w-[100px] md:h-36 md:w-36 rounded-4xl'>
                            <div><PawPrint className='best-i'/></div>
                            <h1 className='best-h1'>Veterinary Care</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best;
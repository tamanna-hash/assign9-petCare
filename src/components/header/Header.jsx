import React, { } from 'react';
import './Header.css'
import cat1 from '../../assets/cat1.jpg'
import cat4 from '../../assets/cat4.jpg'
import cat5 from '../../assets/cat5.jpg'
import dog1 from '../../assets/dog1.jpg'
import dog2 from '../../assets/dog2.jpg'
import bird1 from '../../assets/bird1.jpg'

const Header = () => {
    return (
        <div className=''>
            <div className=''>
                <div className="carousel w-full overflow-hidden h-[450px] ">
                    <div className="flex flex-col animate-slide">
                        <div id="slide1" className="carousel-item px-2 md:px-7 bg-[#fff3e1] relative w-full h-[450px] object-cover ">
                            <div className='flex fredoka items-center my-6 gap-2 max-w-[1200px] mx-auto w-full justify-between'>
                                <div className='flex flex-col gap-2 md:gap-6 items-center justify-center'>
                                    <h1 className='text-4xl md:text-7xl text-[#c19e6a] font-bold '>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='font-bold text-xl text-[#766242]'>Your pet’s care, our priority</p>
                                </div>
                                <img src={cat1} className=" h-[180px] w-[180px] md:h-[400px] md:w-[400px] rounded-[50%]" />
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item px-2 md:px-7 bg-[#f0fcff] relative w-full h-[450px] object-cover">
                            <div className='flex fredoka items-center my-6 gap-2 max-w-[1200px] mx-auto w-full justify-between'>
                                <div className='flex flex-col gap-2 md:gap-6 items-center justify-center'>
                                    <h1 className='text-4xl md:text-7xl text-[#88b9d9] font-bold '>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='font-bold text-xl md:ml-3 text-[#4e98b3]'>Your pet’s care, our priority</p>
                                </div>
                                <img src={cat4} className=" h-[180px] w-[180px] md:h-[400px] md:w-[400px] rounded-[50%]" />
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item px-2 md:px-7 bg-[#fffbf4] relative w-full h-[450px] object-cover">
                            <div className='flex fredoka items-center my-6 gap-2 max-w-[1200px] mx-auto w-full justify-between'>
                                <div className='flex flex-col gap-2 md:gap-6 items-center justify-center'>
                                    <h1 className='text-4xl md:text-7xl text-[#beab8f] font-bold '>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='font-bold text-xl md:ml-3 text-[#968364]'>Your pet’s care, our priority</p>
                                </div>
                                <img src={dog1} className=" h-[180px] w-[180px] md:h-[400px] md:w-[400px] rounded-[50%]" />
                            </div>
                        </div>

                        <div id="slide4" className="carousel-item px-2 md:px-7 bg-[#fdf0fd] relative w-full h-[450px] object-cover">
                            <div className='flex fredoka items-center my-6 gap-2 max-w-[1200px] mx-auto w-full justify-between'>
                                <div className='flex flex-col gap-2 md:gap-6 items-center justify-center'>
                                    <h1 className='text-4xl md:text-7xl text-[#e09ce0] font-bold '>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='font-bold text-xl md:ml-3 text-[#a85ea8]'>Your pet’s care, our priority</p>
                                </div>
                                <img src={bird1} className=" h-[180px] w-[180px] md:h-[400px] md:w-[400px] rounded-[50%]" />
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item px-2 md:px-7 bg-[#d2cdc7] relative w-full h-[450px] object-cover">
                            <div className='flex fredoka items-center my-6 gap-2 max-w-[1200px] mx-auto w-full justify-between'>
                                <div className='flex flex-col gap-2 md:gap-6 items-center justify-center'>
                                    <h1 className='text-4xl md:text-7xl text-[#a48e74] font-bold '>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='font-bold text-xl md:ml-3 text-[#766754]'>Your pet’s care, our priority</p>
                                </div>
                                <img src={dog2} className=" h-[180px] w-[180px] md:h-[400px] md:w-[400px] rounded-[50%]" />
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item px-2 md:px-7 bg-[#d2e2eb] relative w-full h-[450px] object-cover">
                            <div className='flex fredoka items-center my-6 gap-2 max-w-[1200px] mx-auto w-full justify-between'>
                                <div className='flex flex-col gap-2 md:gap-6 items-center justify-center'>
                                    <h1 className='text-4xl md:text-7xl text-[#73a6c4] font-bold '>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='font-bold text-xl md:ml-3 text-[#53788f]'>Your pet’s care, our priority</p>
                                </div>
                                <img src={cat5} className=" h-[180px] w-[180px] md:h-[400px] md:w-[400px] rounded-[50%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
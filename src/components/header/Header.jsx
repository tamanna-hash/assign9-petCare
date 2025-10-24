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
                <div className="carousel fredoka w-full overflow-hidden h-[200px] md:h-[450px] ">
                    <div className="flex flex-col animate-slide max-w-[1200px] ">
                        <div id="slide1" className="slide-container carousel-item bg-[#fff3e1] ">
                            <div className='slide-container-c '>
                                <div className='slide-container-c-c '>
                                    <h1 className='text-[#c19e6a]  '>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className=' text-[#766242]'>Your pet’s care, our priority</p>
                                    <p className=' text-[#766242]'>Every Pet Matters</p>
                                </div>
                                <img src={cat1} className="" />
                            </div>
                        </div>
                        <div id="slide2" className="bg-[#f0fcff] slide-container carousel-item">
                            <div className='slide-container-c '>
                                <div className='slide-container-c-c '>
                                    <h1 className=' text-[#88b9d9]'>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='text-[#4e98b3]'>Your pet’s care, our priority</p>
                                    <p className=' text-[#3a7990]'>Every Pet Matters</p>
                                </div>
                                <img src={cat4} className="" />
                            </div>
                        </div>
                        <div id="slide3" className=" bg-[#d2cdc7] slide-container carousel-item">
                            <div className='slide-container-c '>
                                <div className='slide-container-c-c '>
                                    <h1 className='text-[#a48e74]'>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='text-[#766754]'>Your pet’s care, our priority</p>
                                    <p className='text-[#6d573a]'>Every Pet Matters</p>
                                </div>
                                <img src={dog2} className="" />
                            </div>
                        </div>
                        <div id="slide4" className="bg-[#fffbf4] slide-container carousel-item">
                            <div className='slide-container-c '>
                                <div className='slide-container-c-c '>
                                    <h1 className='text-[#beab8f]'>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='text-[#968364]'>Your pet’s care, our priority</p>
                                    <p className=' text-[#766242] '>Every Pet Matters</p>
                                </div>
                                <img src={dog1} className="" />
                            </div>
                        </div>

                        <div id="slide5" className="bg-[#ffe2ec] slide-container carousel-item">
                            <div className='slide-container-c '>
                                <div className='slide-container-c-c '>
                                    <h1 className=' text-[#e09cc1]'>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='text-[#e09cc1]'>Your pet’s care, our priority</p>
                                    <p className='text-[#9c3f73]'>Every Pet Matters</p>
                                </div>
                                <img src={bird1} className="" />
                            </div>
                        </div>

                        <div id="slide6" className=" bg-[#d2e2eb] slide-container carousel-item">
                            <div className='slide-container-c '>
                                <div className='slide-container-c-c '>
                                    <h1 className='text-[#73a6c4]'>Love, Care & <br /> Pawsitivity
                                    </h1>
                                    <p className='text-[#53788f]'>Your pet’s care, our priority</p>
                                    <p className='text-[#3c5f75]'>Every Pet Matters</p>
                                </div>
                                <img src={cat5} className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
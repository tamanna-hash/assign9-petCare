import React, { } from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className=''>
            <div class="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full h-[500px] animate-slide">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" className="w-full" />
                 
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px] animate-slide">
                    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" className="w-full" />
                  
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[500px] animate-slide">
                    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" className="w-full" />
                  
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[500px] animate-slide">
                    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" className="w-full" />
                   
                </div>
            </div>
        </div>
    );
};

export default Header;
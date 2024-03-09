import React, { useState } from "react";
import hcimg1 from '../assets/hcimg1.png';
import hcimg1B from '../assets/hcimg1B.png';
import hcimg2 from '../assets/hcimg2.png';
import hcimg2B from '../assets/hcimg2B.png';
import hcimg3 from '../assets/hcimg3.png';
import hcimg3B from '../assets/hcimg3B.png';
import hcimg5 from '../assets/hcimg5.png';
import hcimg5B from '../assets/hcimg5B.png';

const HeroCarousel = () => {
    const [selected, setSelected] = useState(0);

    const images = [
        [hcimg5, hcimg5B],
        [hcimg1, hcimg1B],
        [hcimg2, hcimg2B],
        [hcimg3, hcimg3B]
    ];

    return (
        <div className="flex flex-row cursor-pointer w-full">
            {images.map((image, index) => (
                <img key={index} src={selected === index ? image[0] : image[1]} 
                    alt={`Slide ${index}`}
                    onClick={() => setSelected(index)}
                    className={`h-[380px] ${selected === index ? 'w-[1332px]' : 'w-[196px]' } transition-width duration-[0.23s] ease-in-out`}
                />
            ))}
        </div>
    );
};

export default HeroCarousel;

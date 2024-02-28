import React, { useState } from 'react'

const NavDropdown = ({name}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isInContainer, setIsInContainer] = useState(false);
    // const inContainer = () => setIsInContainer(true);
    const showDropdown = () => {setIsVisible(true)};
    const hideDropdown =() => setIsVisible(false);

    return (
        <div className="inline-block items-center" onMouseEnter={showDropdown}>
            <button className="inline-flex justify-center  focus:outline-none">{name}</button>
            {isVisible && (
                <div className="absolute w-screen mt-3 h-[300px] bg-primary left-0 items-center text-dimWhite" onMouseLeave={hideDropdown}>
                    <ul className="flex flex-col items-left text-white px-3 pt-6">
                        <li><h3>Heading</h3></li>
                        <li className="hover:text-ducklingYellow cursor-pointer">Item 1</li>
                        <li className="hover:text-ducklingYellow cursor-pointer">Item 2</li>
                        <li className="hover:text-ducklingYellow cursor-pointer">Item 3</li>
                        <li className="hover:text-ducklingYellow cursor-pointer">Item 4</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavDropdown

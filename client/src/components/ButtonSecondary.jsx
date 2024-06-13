import React from 'react'

const ButtonSecondary = ({text, extended}) => {
    return (
        <button className={`items-center text-black text-[16px] font-semibold ${extended == 'extended' ? 'w-full' : 'w-[195px]'} h-[30px] bg-ducklingYellow hover:bg-yellow-500`}>
            {text}
        </button>
    )
}

export default ButtonSecondary

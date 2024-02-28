import React from 'react'

const Button = ({text}) => {
    return (
        <button className="items center text-white text-18px font-semibold border border-solid border-[1px] border-white w-[195px] h-[30px]">
            {text}
        </button>
    )
}

export default Button

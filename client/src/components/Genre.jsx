import React from 'react'

const Genre = ({text}) => {
    return (
        <div className="flex items-center w-auto h-[25px] bg-tertiatry text-dimWhite text-[12px] rounded-xl p-3 hover:bg-primary hover:text-white cursor-pointer">
            {text}
        </div>
    )
}

export default Genre

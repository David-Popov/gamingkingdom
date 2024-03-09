import React from 'react'

const CategoryCard = ({numberOfGames, icon, categoryName}) => {
    return (
        <div className="flex flex-col items-center bg-secondary w-[150px] h-[140px] drop-shadow-lg text-[22px] text-white hover:bg-primary cursor-pointer">
            <div className="pt-2">
                {numberOfGames}
            </div>
            <div className="text-[35px] pt-2">
                {icon}
            </div>
            <div className="pt-2">
                {categoryName}
            </div>
        </div>
    )
}

export default CategoryCard

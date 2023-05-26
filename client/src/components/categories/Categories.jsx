import React from 'react'

const Categories = () => {
    return (
        <ul className="flex gap-4 md:flex-col text-lg">
            <li className="bg-blue-600 px-6 py-10 text-white cursor-pointer hover:bg-blue-400 transition-all text-center min-w-[140px]">
                <span>All</span>
            </li>
            <li className="bg-blue-600 px-6 py-10 text-white cursor-pointer hover:bg-blue-400 transition-all text-center min-w-[140px]">
                <span>Category 1</span>
            </li>
            <li className="bg-blue-600 px-6 py-10 text-white cursor-pointer hover:bg-blue-400 transition-all text-center min-w-[140px]">
                <span>Category 2</span>
            </li>
            <li className="bg-blue-600 px-6 py-10 text-white cursor-pointer hover:bg-blue-400 transition-all text-center min-w-[140px]">
                <span>Category 3</span>
            </li>
            <li className="bg-blue-600 px-6 py-10 text-white cursor-pointer hover:bg-blue-400 transition-all text-center min-w-[140px]">
                <span>Category 4</span>
            </li>
            <li className="bg-blue-600 px-6 py-10 text-white cursor-pointer hover:bg-blue-400 transition-all text-center min-w-[140px]">
                <span>Category 5</span>
            </li>
            <li className="bg-blue-600 px-6 py-10 text-white cursor-pointer hover:bg-blue-400 transition-all text-center min-w-[140px]">
                <span>Category 6</span>
            </li>
        </ul>
    )
}

export default Categories
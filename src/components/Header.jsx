import React from 'react'

import Login from './Login'
import Cart from './Cart'

const Header = () => {
    return (
        <>
            <nav className="bg-white dark:bg-neutral-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="#" className="flex items-center">
                        <img src="./logo.png" className="h-9 mr-3" alt="Sizzle Logo" />
                        {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sizzle</span> */}
                    </a>
                    <div className="flex items-center">
                        <a href="tel:5541251234" className="mr-6 text-sm font-medium text-neutral-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <Login />
                        <Cart />
                    </div>
                </div>
            </nav>
            <nav className="bg-neutral-50 dark:bg-neutral-700 border border-neutral-200">
                <div className="max-w-screen-xl py-px px-4 mx-auto md:px-6">
                    <div className="flex items-center justify-between">
                        <ul className="flex flex-row mt-0 mr-6 font-medium overflow-x-auto border">
                            <li className="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" className="text-neutral-900 dark:text-white hover:underline" aria-current="page">Deals</a>
                            </li>
                            <li className="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" className="text-neutral-900 dark:text-white hover:underline">Pizzas</a>
                            </li>
                            <li className="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" className="text-neutral-900 dark:text-white hover:underline">Drinks</a>
                            </li>
                            <li className="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" className="text-neutral-900 dark:text-white hover:underline">Deserts</a>
                            </li>
                        </ul>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Veg</span>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
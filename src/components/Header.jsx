import React from 'react'

import Login from './Login'
import Register from './Register'
import Cart from './Cart'

const Header = () => {
    return (
        <>
            <nav class="bg-white dark:bg-neutral-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="#" class="flex items-center">
                        <img src="./logo.png" class="h-6 mr-3 sm:h-9" alt="Sizzle Logo" />
                        {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sizzle</span> */}
                    </a>
                    <div class="flex items-center">
                        <a href="tel:5541251234" class="mr-6 text-sm font-medium text-neutral-500 dark:text-white hover:underline">(555) 412-1234</a>
                        <Login />
                        <Cart />
                    </div>
                </div>
            </nav>
            <nav class="bg-neutral-50 dark:bg-neutral-700 border border-neutral-200">
                <div class="max-w-screen-xl py-px px-4 mx-auto md:px-6">
                    <div class="flex items-center justify-between">
                        <ul class="flex flex-row mt-0 mr-6 font-medium overflow-x-auto border">
                            <li class="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" class="text-neutral-900 dark:text-white hover:underline" aria-current="page">Deals</a>
                            </li>
                            <li class="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" class="text-neutral-900 dark:text-white hover:underline">Pizzas</a>
                            </li>
                            <li class="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" class="text-neutral-900 dark:text-white hover:underline">Sides</a>
                            </li>
                            <li class="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" class="text-neutral-900 dark:text-white hover:underline">Drinks</a>
                            </li>
                            <li class="hover:bg-neutral-200 px-4 py-3 border">
                                <a href="#" class="text-neutral-900 dark:text-white hover:underline">Deserts</a>
                            </li>
                        </ul>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Veg</span>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
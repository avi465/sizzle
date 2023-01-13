import React from 'react'

import { urlFor } from "../../lib/client"

const Card = ({ value: { image, name, price, description } }) => {
    console.log(urlFor(image));
    return (
        <>

            <div class="w-full max-w-sm bg-white rounded-lg shadow-sm hover:shadow-2xl dark:bg-neutral-800 dark:border-neutral-700">
                <a href="#">
                    <img loading="lazy" class="pb-4 rounded-t-lg" src={urlFor(image[0])} alt="pizza image" />
                </a>
                <div class="px-4 pb-4">
                    <a href="#">
                        <h5 class="text-lg font-medium tracking-tight text-neutral-900 dark:text-white">{name}</h5>
                    </a>
                    <div class="flex items-center mt-2.5 mb-5">
                        <p className='text-sm text-neutral-600'>{description}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <span class="text-lg font-bold text-neutral-900 dark:text-white">₹{price}</span>
                        <a href="#" class="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Add to cart</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
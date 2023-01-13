import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import { client } from '../../lib/client'

const Menu = () => {
    const [pizzaData, setPizza] = useState(null);

    useEffect(() => {
        const query = `*[_type=="pizza"]`
        client.fetch(query)
            .then((data) => setPizza(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <section className='bg-neutral-100 dark:bg-neutral-900 shadow-md'>
                <div class="grid grid-cols-card gap-2 items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    {pizzaData && pizzaData.map((data) => <Card key={data._id} value={data} />)}
                </div>
            </section>
        </>
    )
}
export default Menu
import React from 'react'
import citiesData from './CountriesData'
import { EventHandler } from 'react'
import handleItemClick from './Dropdown'

export const CardDisplaySec = () => {
    return (
        <div className='flex flex-wrap justify-around gap-y-4'>
            {citiesData.map(item=>(
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img key={item.id} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg" src={item.img} alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 key={item.id} class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                    <p key={item.id} class="mb-3 text-sm text-gray-700 dark:text-gray-400">{item.info}</p>
                </div>
                </a>
            ))}
        </div>
        
      )
}

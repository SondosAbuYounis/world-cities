import React, {useState} from 'react'
import citiesData from './CountriesData'
import { EventHandler } from 'react';

export const Dropdown = () => {     
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
      };
  return (
    <>
        {/* Dropdown menu */} 
        <div className='flex justify-center my-16'>
        <select class="text-white bg-[#EA5757] hover:bg-white hover:text-[#EA5757] hover:border-[#EA5757] focus:ring-4 focus:outline-none focus:ring-[#EA5757] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <option value="">Select an item</option>
            {citiesData.map(item=>(
            <option key={item.id}  onClick={() => handleItemClick(item)} className="block px-4 py-4 hover:bg-white focus:outline-none dark:hover:bg-gray-600 dark:hover:text-white">{item.country}</option>
            ))}
        </select>
        </div>
        <div>
        {selectedItem && (
        <div className='flex flex-wrap justify-around gap-y-4'>
            {citiesData.map(item=>(
                <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img key={selectedItem.name} class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg" src={selectedItem.img} alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 key={selectedItem.name} class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{selectedItem.name}</h5>
                    <p key={selectedItem.name} class="mb-3 text-sm text-gray-700 dark:text-gray-400">{selectedItem.info}</p>
                </div>
                </a>
            ))}
        </div>
        )}
        </div>
    </>
  )
}

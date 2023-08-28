/* eslint-disable no-unused-vars */
import React from 'react';
import { AutomatedForms } from "../data/Data"

const FormLinks = () => {
    return (
        <div className="flex flex-col top-[35%] left-0 fixed">
            <ul className='social-links'>
                {AutomatedForms.map((forms, index) => (

                    <li key={index} className={`hidden  lg:flex justify-between items-center w-40 h-[60px]  px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-blue-600 ${forms.style}`}>
                        <a href={forms.href} className='flex justify-between items-center w-full text-gray-100' target='_blank' rel='noreferrer'>
                            {forms.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FormLinks
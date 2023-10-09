import React from 'react'

const AddressCard = () => {
    return (
        <div className='border shadow-lg rounded-md p-5 container mx-auto'>
            <div className='space-y-3'>
                <p className='font-semibold'>Belal Hossain</p>
                <p >Rangpur,Lalmonirhat,Durarkuti,5510</p>
                <div className='font-semibold space-y-1'>
                    <p className='font-semibold '>Phone</p>
                    <p>+8801940075782</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard
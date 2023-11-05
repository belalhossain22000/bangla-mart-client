import React from 'react'
import { useGetUserByEmailQuery } from '../../redux/api/usersApi'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'

const AddressCard = () => {

    const {user } = useContext(AuthContext)


const {data:currentUser,isLoading}=useGetUserByEmailQuery(user?.email)

if(isLoading){
    return <h1>Loading....</h1>
  
}
const {firstName,lastName,address,city,village,postCode,phoneNumber}=currentUser?.address ||{}
// console.log(currentUser)

    return (
        <div className='border shadow-lg rounded-md p-5 container mx-auto'>
            <div className='space-y-3'>
                <p className='font-semibold'>{firstName} {lastName}</p>
                <p >{city},{village},{address},{postCode}</p>
                <div className='font-semibold space-y-1'>
                    <p className='font-semibold '>Phone</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
        </div>
    )
}

export default AddressCard
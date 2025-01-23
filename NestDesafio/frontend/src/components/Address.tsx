import React from 'react'

type Props = {}

const Address = (props: Props) => {
  return (
    <div className='flex flex-col gap-2 p-2'>
        <p className='text-xl'>CEP: </p>
        <p className='text-xl'>Street: </p>
        <p className='text-xl'>Number: </p>
        <p className='text-xl'>Complement: </p>
        <p className='text-xl'>Neighborhood: </p>
        <p className='text-xl'>State: </p>
        <p className='text-xl'>City: </p>
    </div>
  )
}

export default Address
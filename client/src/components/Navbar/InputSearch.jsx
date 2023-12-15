import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'

const InputSearch = () => {
  return (
    <div>
        <div className="form-control flex-grow relative">
          <input
            type="text"
            placeholder="Search for products"
            className="bg-transparent input input-bordered w-full pl-12"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <UilSearch size="20" />
          </span>
        </div>
    </div>
  )
}

export default InputSearch
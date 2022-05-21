import React from 'react'
import { useGlobalContext } from './Context'
import './Buttons.css'

export default function Buttons() {
  const {isLoading,page,nbPages,handlePage} = useGlobalContext();
  return (
    <>
      <div className='btn-contains'>
        <button disabled={isLoading} onClick={()=>handlePage('dec')}>
          Prev
        </button>
        <p>{page + 1} OF {nbPages}</p>
        <button disabled={isLoading} onClick={()=>handlePage('inc')}>Next</button>
      </div>
    </>
  )
}

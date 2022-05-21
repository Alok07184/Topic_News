import React from 'react'
import { useGlobalContext } from './Context'
import './SearchForm.css'

export default function SearchForm() {
    const {query,handleSearch} = useGlobalContext();
  return (
    <>
    <div className='bodys'>
      <form onSubmit={(e)=>e.preventDefault()}>
          <h2 className='title'>Topic News.</h2>
          <input type="text" name="" id="" className='searching' value={query} onChange={(e)=>handleSearch(e.target.value)}/>
      </form>
      </div>
    </>
  )
}

import React from 'react'

import { useGlobalContext } from './Context'

import './Stories.css'

export default function Stories() {
    const {isLoading,hits,removeStory}  =useGlobalContext();

    if(isLoading)
    {
        return <div>Loading...</div>
    }
  return (
    <>
    <section className='grids'>
        {hits.map((item)=>{
            const {objectID,title,num_comments,url,points,author}=item;
            
            return <article key={objectID} className='grid-item'>
                <h4 className='news-title'>{title}</h4>
                <p><span className='value'>{points} </span> points by <span className='details'>{author}  </span>| <span className='value'>{num_comments} </span>{' '} comments</p>
                <div className='btns'><a href={url} target="_blank" className='readmore' rel='noopener_noreferrer'>
                    Read More
                </a>
                <button  onClick={()=>{
                    removeStory(objectID)
                }} className='cancel'>
                    Remove
                </button></div>

            </article>
        })}
    </section>
    </>
  )
}

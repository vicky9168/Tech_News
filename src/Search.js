import React from 'react'
import { useGlobalContext } from './Context';
const Stories = () => {
    // const name=useGlobalContext();
    const {query,searchPost} =useGlobalContext();

  return (
    <div>
     <h1 style={{padding:"20px 0px 10px 0px"}}>Tech News Website</h1>
     <form onSubmit={(e)=>e.preventDefault()}>
        <div>
            <input type="text" placeholder="search here" 
            value={query}
            onChange={(e)=>searchPost(e.target.value)}
            />
        </div>
     </form>
    </div>
  )
}

export default Stories

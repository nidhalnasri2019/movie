import React from 'react';
import Item from './card'
import './liste.css'
 import Hoc from './hoc.js'
import './hoc.css'

const Liste=({news,remove})=>{
    
    return(<div className='liste'>
        {news.map((el,index)=>
            {return<Item key={index} id={index} item={el} remove={remove}  />})}
    </div>)
}

export default Hoc(Liste);
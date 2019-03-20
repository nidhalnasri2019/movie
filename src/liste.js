import React from 'react';
import Item from './card'
import './liste.css'
const Liste=({news})=>{
    return(<div className='liste'>
        {news.map((el,index)=>{return<Item  key={index}  item={el}  />})}
    </div>)
}
export default Liste
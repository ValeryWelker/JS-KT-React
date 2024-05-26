import React from 'react'
import '../styles/Categories.css';

export default function Categories() {
    return (
      <div className='categories_block'>
        <div className="categories_headline">
          <div className="categories_block_name">Categories</div>
        </div>
        <div className="categories_pictures">
          <div className="categories_pictures_element">
            <a href=""><img src="/images/cat_fertil.png"></img></a>
            <a href=""><div>Fertilizer</div></a>
          </div>
          
          <div className="categories_pictures_element">
          <a href=""><img src="/images/cat_protect.png"></img></a>
            <a href=""><div>Protective products and septic tanks</div></a>
          </div>
          
          <div className="categories_pictures_element">
            <a href=""><img src="/images/cat_plant.png"></img></a>
            <a href=""><div>Planting material</div></a>
          </div>
          
          <div className="categories_pictures_element">
           <a href=""> <img src="/images/cat_tools.png"></img></a>
           <a href=""> <div>Tools and equipment</div></a>
          </div>

          <div className="categories_pictures_element">
          <a href=""><img src="/images/pots.png"></img></a>
            <a href=""><div>Pots and planters</div></a>
          </div>

        </div>
      </div>
    );
  }
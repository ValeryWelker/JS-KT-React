import React from 'react'
import '../styles/Sales.css';

export default function sales() {
    return (
      <div className='sales_block'>
        <div className="sales_headline">
          <div className="sales_block_name">Sale</div>
        </div>
        <div className="sales_pictures">
          <div className="saleelement">
          <a href=""><img src="/images/bridge.png"></img></a>
            <div>Decorative forged bridge</div>
            <div className="pricetext">
              <div className="pricetextfat">$500</div>
              <div className="pricetextnormal">$1000</div>
            </div>
          </div>
          
          <div className="saleelement">
            <a href=""><img src="/images/flbasket.png"></img></a>
            <div>Flower basket</div>
            <div className="pricetext">
              <div className="pricetextfat">$100</div>
              <div className="pricetextnormal">$150</div>
            </div>
          </div>
        
          <div className="saleelement">
          <a href=""><img src="/images/Aquarium.png"></img></a>
            <div>Aquarium lock</div>
            <div className="pricetext">
              <div className="pricetextfat">$150</div>
              <div className="pricetextnormal">$200</div>
            </div>
          </div>
  
          <div className="saleelement">
          <a href=""><img src="/images/Secateurs.png"></img></a>
            <div>Secateurs</div>
            <div className="pricetext">
              <div className="pricetextfat">$150</div>
              <div className="pricetextnormal">$200</div>
            </div>
          </div>


        </div>
      </div>
    );
  }
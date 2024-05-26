import * as React from 'react'
import '../styles/Discountform.css';

export default function Categories() {
    return (
      <div className='Discountform_block'>
        <div className='Discountform'>
          <div className='discount_headtext'>5% off on the first order</div>
          <div className='inputform'>
              <div className='discountimage'><img src="/images/discountimage.png"></img></div>
              <div className='inputlines'>
                <form id="input_discount" method="POST">
                  <input type="text" className="input1" defaultValue="       Name" name="input_name"></input>
                  <input type="text" className="input1" defaultValue="       Phone number" name="input_phone"></input>
                  <input type="text" className="input1" defaultValue="       Email" name="input_email"></input>
                  <button className="getdiscount_button" type="submit">Get a discount</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    )
  }
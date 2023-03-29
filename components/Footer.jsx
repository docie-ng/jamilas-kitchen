import React from 'react'
import Flag from '.././server/public/images/lebaneseFlag.png'

function Footer () {
return (
<footer>
  <div className='flag'>
    <img src={Flag} alt='Lebanon flag'></img>
  </div>
  <ul className='ul'>
    <li>Tues - Sun</li> 
    <li>2pm - late</li>
    <li>123 Field Street</li>
    <li>Kingsland, Auckland</li>
  Book a table at hello@jamilaskitchen.co.nz
  </ul>
</footer>
)

}

export default Footer
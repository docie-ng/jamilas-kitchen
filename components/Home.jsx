import React from 'react'
import KitchenStaff from '../server/public/images/kitchenstaff.png'

function Home () {
return (
<>
  <h1 className='heading'>Welcome to Jamila's Kitchen </h1>
  <div className='home'>
    <img src={KitchenStaff} alt='photo of kitchen staff' />
  </div>
</>
)
}

export default Home
import React from 'react'

import Hummus from '../server/public/images/hummus.jpg'


function Home () {
return (
<>
  <h1 className='heading'>Welcome to Jamila's Kitchen </h1>
  <div className='homeImage'>
    <img src={Hummus} alt='photo of hummus' />
  </div>

</>
)
}

export default Home
import Banner from './assets/banner.jpeg'
import SpaceIcon from './assets/space.png'

import Header from './Header';

function BoardHeader() {
  return (
    <div>
    <div className='subheader h-40 bg-cover' style={{backgroundImage: `url(${Banner})`}}> 
    </div>
    <div className='bg-reddit-dark-brighter'>
        <div className='mx-6 relative flex'>
            <div className='h-20 w-20 rounded-full overflow-hidden relative -top-4 border-4 border-white bg-white'>
              <img src={SpaceIcon}  className='bg-white p-3' alt="" />
            </div>
            <div className='pt-2 pl-4'>
              <h1 className='text-gray-300 text-3xl'>moonhub: artemis news for space enthusiasts</h1>
              <h5 className='text-gray-500'>h/artemis</h5>
            </div>
        </div>
      </div>
    </div>


  );
}

export default BoardHeader

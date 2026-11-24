import Banner from './assets/banner.jpeg'
import SpaceIcon from './assets/space.png'
import Avatar from './assets/avatar.png'

import BoardHeader from './BoardHeader';

import Header from './Header';

function PostForm() {
  return (
    <div>

      <div className='bg-reddit-dark px-6 py-4 text-gray-400'>

        <div className='border border-reddit-border p-2 rounded-md flex bg-reddit-dark-brighter '>
          <div className='rounded-full bg-gray-600 overflow-hidden w-10 h-10' >
            <img src={Avatar} alt="" className='' style={{filter:'invert(100%)'}}/>
          </div>
          <form action="" className='flex-grow bg-reddit-dark-brightest border border-reddit-border  ml-4 mr-2 rounded-md'>
            <input type="text" className='bg-reddit-dark-brightest p-2 px-3 text-sm block w-full rounded-md' placeholder='New Post' />
          </form>
          </div>
      </div>
    </div>
  );
}

export default PostForm

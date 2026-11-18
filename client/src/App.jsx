import { useState } from 'react'
import Logo from './assets/logo.png'
import {MagnifyingGlassIcon,BellIcon,ChatBubbleOvalLeftEllipsisIcon,PlusIcon} from '@heroicons/react/24/solid'

function App() {
  return (
    <div>
      <header className='w-full bg-reddit-dark p-2'>
        <div className='mx-4 flex'>
          <img src={Logo} alt="Artemis logo" className="w-10 h-10 mr-4" />
              <form action="" className='bg-reddit-dark-brighter p-1 px-3 flex rounded-md border border-gray-700 mx-4 flex-grow'>
          <MagnifyingGlassIcon className="text-gray-300 h-6 w-5 mt-1" />
          <input type="text" className='bg-reddit-dark-brighter text-sm p-1 pl-2 pr-0 focus:outline-none text-white block placeholder:text-white' placeholder='Search'/>
        </form>
        <button className='px-2 py-1'>
                  <BellIcon className='text-white w-6 h-6 mx-2' />

        </button>
        <button className='px-2 py-1'>
                  <ChatBubbleOvalLeftEllipsisIcon className='text-white w-6 h-6 mx-2' />

        </button>
        <button className='px-2 py-1'>
                  <PlusIcon className='text-white w-6 h-6 mx-2' />

        </button>
        </div>
      </header>
    </div>
  );
}

export default App

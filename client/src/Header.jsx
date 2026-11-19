import Logo from './assets/logo.png'
import {MagnifyingGlassIcon,BellIcon,ChatBubbleOvalLeftEllipsisIcon,PlusIcon,ChevronDownIcon} from '@heroicons/react/24/solid'
import Avatar from './assets/avatar.png'
function Header(){

    return(
              <header className='w-full bg-reddit-dark p-2'>
        <div className='mx-4 flex'>
          <img src={Logo} alt="Artemis logo" className="w-10 h-10 mr-4" />
              <form action="" className='bg-reddit-dark-brighter p-1 px-3 flex rounded-md border border-reddit-border mx-4 flex-grow'>
          <MagnifyingGlassIcon className="text-gray-300 h-6 w-5 mt-1" />
          <input type="text" className='bg-reddit-dark-brighter text-sm p-1 pl-2 pr-0 focus:outline-none text-white block placeholder:text-white' placeholder='Search'/>
        </form>
        <button className='px-2 py-1'>
                  <BellIcon className='text-gray-400 w-6 h-6 mx-2' />
        </button>
        <button className='px-2 py-1'>
                  <ChatBubbleOvalLeftEllipsisIcon className='text-gray-400 w-6 h-6 mx-2' />
        </button>
        <button className='px-2 py-1'>
                  <PlusIcon className='text-gray-400 w-6 h-6 mx-2' />
        </button>
        <button className='rounded-md flex ml-4'>
          <div className='w-8 h-8 bg-gray-600 rounded-md'>
              <img src={Avatar} alt=""  style={{filter:'invert(100%)'}} className='block'/>  
          </div>
          
          <ChevronDownIcon className='text-gray-500 w-6 h-6 m-1 mt-2 ml-2'/>
        </button>
        </div>
      </header>
    );

}

export default Header;
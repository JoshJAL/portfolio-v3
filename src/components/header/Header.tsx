import Link from 'next/link';
import HeaderLink from './HeaderLink';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaBookDead, FaLaptopCode, FaHome } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';

export default async function Header() {
  return (
    <header className='w-full z-10 p-5 text-xl fixed md:top-0 bottom-0 h-fit'>
      <nav className='w-full flex items-center justify-between max-w-7xl mx-auto'>
        <Link
          className='hover:scale-110 transition-all text-3xl duration-200 ease-in-out text-almost-white rounded-xl backdrop-blur-lg hidden md:inline-flex'
          href={'/'}
        >
          Joshua Levine
        </Link>
        <div className='rounded-full p-5 bg-light-green/80 backdrop-blur-md flex gap-7 justify-between md:justify-normal text-background w-full md:w-fit'>
          <HeaderLink href='/' additionalClasses='md:hidden'>
            <FaHome className='h-8 w-8' />
          </HeaderLink>
          <HeaderLink href='/about'>
            <div className='flex flex-col h-full gap-2 items-center'>
              <BsInfoCircleFill className='h-8 w-8' />
              <div className='flex-1' />
              <p className='text-sm md:inline-flex hidden'>About Me</p>
            </div>
          </HeaderLink>
          <HeaderLink href='/blog'>
            <div className='flex flex-col h-full gap-2 items-center'>
              <FaBookDead className='h-8 w-8' />
              <div className='flex-1' />
              <p className='text-sm md:inline-flex hidden'>Blog Thing</p>
            </div>
          </HeaderLink>
          <HeaderLink href='/projects'>
            <div className='flex flex-col items-center h-full'>
              <FaLaptopCode className='h-8 w-8' />
              <div className='flex-1' />
              <p className='text-sm md:inline-flex hidden'>Projects</p>
            </div>
          </HeaderLink>
          <HeaderLink href='/contact'>
            <div className='flex flex-col items-center h-full'>
              <BiSolidContact className='h-8 w-8 group-hover:text-red-700 transition-all duration-200 ease-in-out' />
              <div className='flex-1' />
              <p className='md:group-hover:inline-flex text-sm hidden transition-all duration-200 ease-in-out animate-wiggle text-red-700'>
                DO IT NOW
              </p>
              <p className='group-hover:hidden hidden md:inline-flex transition-all text-sm duration-200 ease-in-out'>
                Contact Me
              </p>
            </div>
          </HeaderLink>
        </div>
      </nav>
    </header>
  );
}

import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/solid';
import LogoGrid from './Logo/LogoGrid';
import Link from 'next/link';

function Video() {
  return (
    <div className='relative text-white bg-[#161616] bg-opacity-80 p-6 py-14 flex items-center flex-col'>
      <Image
        src='/black-high.jpg'
        layout='fill'
        className='object-cover object-center z-[-1] '
      />
      <div className='lg:flex lg:justify-around lg:items-center'>
        <div className='relative lg:w-1/3'>
          <h2 className='text-2xl font-bold'>
            We’re EMPIREYO, A{' '}
            <em className='bg-gradient-to-r from-[#ff1053] to-[#ff1053]'>
              Creative Agency
            </em>{' '}
            Based in the Netherlands
          </h2>
          <p className='text-lg my-8'>
            <em className='text-base'>
              *Trademarks belong to their respective owners. all rights reserved
            </em>
            <br />
            <strong>Using</strong> the following <strong>platforms/ </strong>
            software:
          </p>
        </div>
        <Link href='/video'>
          <a>
            <div className='flex justify-center items-center w-full h-[70vh] lg:h-[15vw] lg:w-[25vw] m-auto min-w-[200px] min-h-[150px] my-12 relative group hover:cursor-pointer'>
              <Image
                layout='fill'
                src='/vid-emp.jpg'
                className='object-center object-cover'
              />
              <PlayIcon className='z-20 w-1/12 min-w-[75px] text-[#c79624] transition transform ease-out duration-300 group-hover:scale-110 hover:cursor-pointer' />
            </div>
          </a>
        </Link>
      </div>
      <LogoGrid />
    </div>
  );
}

export default Video;

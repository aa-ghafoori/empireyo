import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/solid';
import LogoGrid from './Logo/LogoGrid';
import Link from 'next/link';

function Video() {
  return (
    <div className='relative text-white bg-[#161616] bg-opacity-80 p-8 py-14 flex items-center flex-col '>
      <div className='z-[-1]'>
        <Image
          src='/black-high.jpg'
          layout='fill'
          className='object-cover object-center z-[-1] '
        />
      </div>
      <div className='relative'>
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
          <div className='flex justify-center items-center h-[50vw] w-[70vw] m-auto min-w-[200px] min-h-[150px] my-12 relative group hover:cursor-pointer'>
            <Image
              src='/vid-emp.jpg'
              className='object-center object-cover'
              layout='fill'
            />
            <PlayIcon className='z-20 w-[20vw] min-w-[75px] text-[#c79624] transition transform ease-out duration-300 group-hover:scale-110 hover:cursor-pointer' />
            <div className='absolute m-auto w-[10vw] h-[10vw] min-w-[40px] bg-white'></div>
          </div>
          <LogoGrid />
        </a>
      </Link>
    </div>
  );
}

export default Video;

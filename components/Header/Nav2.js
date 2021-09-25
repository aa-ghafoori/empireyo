import HeaderItem from './HeaderItem';
import Link from 'next/link';

function Nav2({ show }) {
  return (
    <nav
      className={`hidden h-0 w-0 text-white text-xl z-20 lg:h-auto lg:flex lg:w-full lg:px-6 lg:py-3 lg:bg-transparent lg:my-0 lg:text-lg lg:max-w-2xl ${
        show && 'text-black'
      }`}
    >
      <div className='font-bold lg:flex justify-evenly w-full'>
        <HeaderItem>About</HeaderItem>
        <HeaderItem>Work</HeaderItem>
        <div>
          <HeaderItem>What we do</HeaderItem>
        </div>
        <HeaderItem>News</HeaderItem>
        <Link href='/contact'>
          <a>
            <HeaderItem>Contact</HeaderItem>
          </a>
        </Link>
      </div>
      <div className='my-6 lg:hidden'>
        <h4 className='text-[#d2aa4b] mb-2'>About EMPIREYO</h4>
        <p className='pb-7'>
          The Netherlands <br />
          Coming Soon
        </p>
        <p className='pb-7'>
          Tel:{' '}
          <a className='hover-item' href='tel://+31636297951'>
            +31 (0)6 36 29 79 51
          </a>{' '}
          <br />
          E:{' '}
          <a className='hover-item' href='mailto:hello@empireyo.com'>
            hello@empireyo.com
          </a>
        </p>
      </div>
      <div className='flex space-x-6'>
        <Link href='https://nl-nl.facebook.com/empireyoo/'>
          <a className='hover-item icon facebook'></a>
        </Link>
        <Link href='https://nl.linkedin.com/company/empireyo'>
          <a className='hover-item icon linkedin'></a>
        </Link>
        <Link href='https://www.instagram.com/empireyo'>
          <a className='hover-item icon instagram'></a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav2;

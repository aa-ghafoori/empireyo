import HeaderItem from './HeaderItem';
import Link from 'next/link';
import { useStateValue } from '../../context/StateProvider';

function Nav() {
  const [state, dispatch] = useStateValue();
  return (
    <div
      className={`bg-black text-white text-xl p-16 fixed top-0 right-0 z-20 ${
        !state.navClicked && 'hidden'
      }`}
    >
      <div className='font-bold'>
        <HeaderItem>About</HeaderItem>
        <HeaderItem>Work</HeaderItem>
        <div>
          <HeaderItem>What we do</HeaderItem>
        </div>
        <HeaderItem>News</HeaderItem>
        <HeaderItem>Contact</HeaderItem>
      </div>
      <div className='my-6'>
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
    </div>
  );
}

export default Nav;

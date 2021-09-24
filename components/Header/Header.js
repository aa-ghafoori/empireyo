import { MenuAlt2Icon } from '@heroicons/react/outline';
import { useEffect, useState, Fragment } from 'react';
import { useStateValue } from '../../context/StateProvider';
import * as actionTypes from '../../context/actionTypes';
import Nav2 from './Nav2';
import Link from 'next/link';

function Header() {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useStateValue();
  const navClickHandler = () => {
    dispatch({ type: actionTypes.NAV_CLICKED });
  };

  useEffect(() => {
    const prevPageYOffset = window.pageYOffset;
    window.onscroll = () => {
      // if (prevPageYOffset > 10 && window.pageYOffset > 10) {
      // } else {}
      window.pageYOffset > 10 ? setShow(true) : setShow(false);
    };
    if (state.navClicked) {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'transparent';
    }
    return () => {
      setShow(null);
    };
  }, [state.navClicked]);

  return (
    <div className=''>
      <div
        className={`${show ? 'bg-white' : 'bg-transparent'} ${
          state.navClicked && 'overflow-hidden '
        } fixed top-0  w-full px-6  py-3 z-50 transition transform duration-300 lg:px-20`}
      >
        <div className='flex justify-between m-auto max-w-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-4xl   '>
          <Link href='/'>
            <a>
              <img
                className='object-contain h-6 lg:h-16 lg:m-auto cursor-pointer '
                src={`${show ? '/yellow-emp.png' : '/white-emp.png'}`}
              />
            </a>
          </Link>
          <MenuAlt2Icon
            onClick={navClickHandler}
            className={`w-7 ${
              show ? 'text-black' : 'text-white'
            } stroke cursor-pointer lg:hidden`}
          />
          <Nav2 show={show} className='hidden lg:block ' />
        </div>
      </div>
    </div>
  );
}

export default Header;

import { MenuAlt2Icon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useEffect, useState, Fragment } from 'react';
import { useStateValue } from '../../context/StateProvider';
import * as actionTypes from '../../context/actionTypes';

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
  }, []);

  return (
    <div className=''>
      <div
        className={`${show ? 'bg-white' : 'bg-transparent'} ${
          state.navClicked && 'overflow-hidden '
        } fixed top-0 w-full px-6 py-3 z-50 transition transform duration-300`}
      >
        <div className='flex justify-between max-w-md sm:max-w-screen-sm md:max-w-screen-md m-auto  '>
          <Image
            className='object-contain '
            src={`${show ? '/yellow-emp.png' : '/white-emp.png'}`}
            width={28}
            height={28}
          />
          <MenuAlt2Icon
            onClick={navClickHandler}
            className={`w-7 ${
              show ? 'text-black' : 'text-white'
            } stroke cursor-pointer `}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

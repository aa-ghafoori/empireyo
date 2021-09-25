import {
  InboxInIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from '@heroicons/react/outline';
import Header from '../components/Header/Header';
import Nav from '../components/Header/Nav';
import Head from 'next/head';
import { useStateValue } from '../context/StateProvider';
import { Fragment } from 'react';
import * as actionTypes from '../context/actionTypes';

function contact() {
  const [state, dispatch] = useStateValue();
  const navClickHandler = () => {
    state.navClicked && dispatch({ type: actionTypes.NAV_CLICKED2 });
  };

  return (
    <Fragment>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <title>Contact - Empireyo</title>
      </Head>
      <div
        onClick={navClickHandler}
        className={
          state.navClicked
            ? 'cursor-pointer overflow-hidden w-full h-screen transform -translate-x-1/3 scale-75 transition-transform duration-700 ease-in-out'
            : ''
        }
      >
        <Header />
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(10, 10, 10, 0.827),rgba(10, 10, 10, 0.8)) ,url(./photo-bg.jpg)',
            width: '100%',
            height: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            padding: '96px 24px',
            color: 'white',
          }}
        >
          <div className=' responsive lg:pt-10 lg:flex justify-between'>
            <div className='lg:px-6'>
              <h1 className='font-bold text-5xl '>
                Empireyo will breathe <em className='underline'> new life </em> to your online
                presense.
              </h1>
              <p className='text-lg leading-8 py-10  '>
                We hear complaints among different businesses when dealing with
                digital solution companies claiming that they got less than what
                they expected. Working with Empireyo will take away such worries
                from your table. Our most significant assets are you, our
                clients, and that is why we do everything we can to make sure
                that you feel safe and secure to trust us with your brand.
              </p>
            </div>
            <p className='text-lg leading-8 lg:px-6 lg:self-end lg:py-10 '>
              We have expanded our services to five countries now, meaning we
              are closer to home than you ever imagined. Though our main offices
              are in the Netherlands, we are not bound by time or geographical
              limits. In short, we are an international company seeking to serve
              you in the best way we know.
            </p>
          </div>
        </div>
        <div className='bg-[#cd9a50] text-white p-12 text-center'>
          <div className='responsive'>
            <p className='text-lg leading-8'>
              Get in touch with us today through our contacts, and we will get
              back to you as soon as possible.
            </p>
            <p className='text-lg leading-8 py-10'>
              If you are within our offices, feel free to stop by any time and
              have a one on one with any of our team members on how to help
              improve your company’s online presence.{' '}
              <strong>
                Reach out today to build a unique digital strategy for your
                business.
              </strong>
            </p>
            <div className='lg:flex w-full justify-around text-left'>
              <div className='pb-10'>
                <PhoneIcon className='h-9' />
                <h6 className='py-4'>
                  <strong>Phone</strong>
                </h6>
                <p>+31(0)6 36 29 79 51</p>
              </div>
              <div className='pb-10'>
                <InboxInIcon className='h-9' />
                <h6 className='py-4'>
                  <strong>Email</strong>
                </h6>
                <p>hello@empireyo.com</p>
              </div>
              <div className='pb-10'>
                <LocationMarkerIcon className='h-9' />
                <h6 className='py-4'>
                  <strong>Location</strong>
                </h6>
                <p>
                  The Netherlands <br /> Coming soon
                </p>
              </div>
            </div>
            <p className='text-lg leading-8'>
              Our helplines are open 24/7, and you can always leave a message on
              the contact form so we can get back to you as soon as possible.
              Our customer care team is always ready to help, and you can chat
              with them on the chatbox on any of our pages.
            </p>
          </div>
        </div>
        <div className='py-14 px-6 border-t-[1px] border-gray-500 text-lg bg-black text-white'>
          <p className='responsive'>
            Copyright © 2020 <strong>Empireyo</strong> <br />
            All rights reserved.
          </p>
        </div>
      </div>
      <Nav />
    </Fragment>
  );
}

export default contact;

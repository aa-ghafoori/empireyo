import ReactPlayer from 'react-player/lazy';
import { useRouter } from 'next/router';
import { XIcon } from '@heroicons/react/outline';

function video() {
  const router = useRouter();
  const closePlayer = () => {
    router.back();
  };
  return (
    <div className='bg-black h-screen flex items-center' onClick={closePlayer}>
      <XIcon
        className='h-6 text-gray-300 absolute top-[2vw] right-[2vw] hover:cursor-pointer hover:text-white'
        
      />
      <div className='relative w-full h-3/4'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=iCk2ocTHMKA'
          controls
          width='100%'
          height='100%'
          playing
          className='absolute top-0 left-0'
        />
      </div>
    </div>
  );
}

export default video;

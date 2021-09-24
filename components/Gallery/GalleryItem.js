import Image from 'next/image';

function GalleryItem({ src, title, description, Icon }) {
  return (
    <div className='group p-6 m-4 min-h-[400px] relative cursor-pointer flex flex-col justify-between text-white bg-gradient-to-b from-[rgba(15,15,15,0)] to-[rgba(15,15,15,.75)] hover:bg-gradient-to-b hover:from-[rgba(0,0,0,0)] hover:to-[#d2aa4b] w-full'>
      <Image
        src={src}
        layout='fill'
        objectFit='cover'
        className='transition ease-out group-hover:scale-125 transform duration-[9000ms] object-center z-[-1]'
      />
      <div className=' sm:pl-12 sm:pb-8 transition transform group-hover:-translate-y-8 group-active:-translate-y-8 duration-500 z-10'>
        <Icon className='h-10 mb-3 stroke' />
        <h2 className='text-3xl my-2 relative'>{title}</h2>
        <p className='opacity-0 sm:group-hover:opacity-100 duration-500 absolute'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default GalleryItem;

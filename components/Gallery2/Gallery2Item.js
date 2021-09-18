import Image from 'next/image';
function Gallery2Item({ src }) {
  return (
    // <div className='h-[60vh] w-[100vw] relative'>
    //   <Image src={src} layout='fill' className='object-contain' />
    // </div>
    <div className='h-[50vh]'>
      <Image src={src} layout='responsive' className='object-cover object-center' />
    </div>
  );
}

export default Gallery2Item;

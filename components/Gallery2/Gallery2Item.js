import Image from 'next/image';
function Gallery2Item({ src }) {
  return (
    // <div className='h-[60vh] w-[100vw] relative'>
    //   <Image src={src} layout='fill' className='object-contain' />
    // </div>
    <div className=''>
      <Image src={src} layout='responsive' height={100} width={200} className='object-cover object-center' />
    </div>
  );
}

export default Gallery2Item;

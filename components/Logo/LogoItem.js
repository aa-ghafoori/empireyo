import Image from 'next/image';

function LogoItem({ src }) {
  return (
    <div className='relative w-[20vw] h-[15vw] max-w-[6rem] lg:h-[3vw] '>
      <Image src={src} layout='fill' className='object-contain' />
    </div>
  );
}

export default LogoItem;

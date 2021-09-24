import Button from './ui/Button';

function Part3() {
  return (
    <div className='bg-black flex flex-col items-center text-white p-6 m-auto '>
      <h2 className='text-2xl w-[50vw] text-center mt-16 mb-10  font-bold'>
        Enough Talk, Let's Build Something Together
      </h2>
      <Button bgColor='bg-[#d2aa4b]' textColor='text-white' href='/'>
        Reach out now
      </Button>
      <p className='py-14 my-14 border-t-[1px] border-gray-500 text-lg'>
          Copyright © 2020 <strong>Empireyo</strong> <br />
          All rights reserved.
      </p>
    </div>
  );
}

export default Part3;

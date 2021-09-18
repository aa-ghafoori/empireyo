import LogoItem from './LogoItem';

function LogoGrid() {
  return (
    <div className='z-10 grid grid-cols-2 gap-x-20 justify-items-center sm:grid-cols-3 sm:gap-x-12 lg:flex lg:justify-evenly lg:gap-x-0 sm:max-w-screen-sm md:max-w-screen-md '>
      <LogoItem src='/adobe-emp.png' />
      <LogoItem src='/wordpress-emp.png' />
      <LogoItem src='/google-emp.png' />
      <LogoItem src='/cpanel-emp.png' />
      <LogoItem src='/micro-emp.png' />
      <LogoItem src='/ios-emp.png' />
    </div>
  );
}

export default LogoGrid;

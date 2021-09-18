import Link from 'next/link';
import { ArrowNarrowRightIcon } from '@heroicons/react/outline';

function Button({ href, bgColor, textColor, children }) {
  return (
    <div>
      <Link href={href}>
        <a
          className={`group flex items-center ${bgColor} rounded-full py-5 px-10`}
          style={{ width: 'fit-content' }}
        >
          <ArrowNarrowRightIcon className={`btn-hover h-6 ${textColor} stroke`} />
          <span className={`btn-hover px-2 font-bold whitespace-nowrap ${textColor}`}>
            {children}
          </span>
        </a>
      </Link>
    </div>
  );
}

export default Button;

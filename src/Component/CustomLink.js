import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, className, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={` w-full h-full  `}>
      <Link
        className={`${className} w-full py-2 px-3 rounded-sm hover:text-white ${match ? "text-white bg-purple-600" : 'text-gray-400' }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;

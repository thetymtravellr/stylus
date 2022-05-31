import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomDashboardLink({ children, to, className, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={`w-full h-full rounded-md p-0 hover:text-white ${match ? "bg-secondary bg-opacity-75 text-white" : 'text-gray-500'}`}>
      <Link
        className={`${className} w-full`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomDashboardLink;

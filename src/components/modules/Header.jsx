import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();

  const browse = pathname === "/browse";
  return (
    <header className="w-full px-3 sm:px-5 md:px-10 py-3 flex items-center justify-between">
      {/* logo */}
      <div className="md:w-1/6">
        <Link to="/">
          <img src="/img/icon-dark.png" className="w-fit h-10" />
        </Link>
      </div>

      {/* links */}
      <div className="md:w-4/6 inline-flex justify-center items-center gap-3 text-white">
        <Link to="/#about">
          <div
            className={`${
              !browse && "text-primary"
            } transition-transform ease-in-out transform hover:scale-110 hover:text-primary-100 duration-300`}
          >
            About
          </div>
        </Link>
        <Link to="/browse">
          {" "}
          <div
            className={`${
              browse && "text-primary"
            } transition-transform ease-in-out transform hover:scale-110 hover:text-primary-100 duration-300`}
          >
            Browse
          </div>
        </Link>
        <Link to="/#faqs">
          <div
            className={`${
              !browse && "text-primary"
            } transition-transform ease-in-out transform hover:scale-110 hover:text-primary-100 duration-300`}
          >
            Faqs
          </div>
        </Link>
      </div>

      {/* action button */}
      <div className="md:w-1/6 inline-flex justify-end">
        <Link to="/create-post">
          <button className="px-3 md:px-10 py-2 font-medium rounded-full bg-gradient-to-r from-primary-200 to-primary hover:bg-primary-300">
            Generate
          </button>
        </Link>
      </div>
    </header>
  );
};

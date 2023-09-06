import React from "react";

export const Footer = () => {
  return (
    <div className="max-w-7xl container mx-auto p-5 space-y-3">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* logo */}
        <div className="w-full col-span-2 md:col-span-1">
          <img src="/img/icon-dark.png" className="w-fit h-20 md:h-32" />
        </div>

        <div className="w-full flex md:justify-center">
          <div>
            <h3>Project</h3>
            <div>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Overview
              </p>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Safety
              </p>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Pricing
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex md:justify-center">
          <div>
            <h3>Company</h3>
            <div>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                About
              </p>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Blog
              </p>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Careers
              </p>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Company
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex md:justify-center">
          <div>
            <h3>Socials</h3>
            <div>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Twitter
              </p>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Youtube
              </p>
              <p className="text-primary-100 hover:text-primary cursor-pointer">
                Linkedin
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-0.5 bg-white rounded-full" />

      <div className="w-full flex flex-col items-center text-sm">
        <p>imGenerator AI &copy; 2022-2023</p>
        <div className="inline-flex items-center text-primary-100 gap-2">
          <p className="hover:text-primary cursor-pointer">Terms & condition</p>
          <div className="w-0.5 h-0.5 rounded-full bg-white" />
          <p className="hover:text-primary cursor-pointer">Privacy policy</p>
          <div className="w-0.5 h-0.5 rounded-full bg-white" />
          <p className="hover:text-primary cursor-pointer">Security policy</p>
        </div>
      </div>
    </div>
  );
};

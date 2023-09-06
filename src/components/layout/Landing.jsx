import { Footer, Header } from "../modules";

export const Landing = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* <div className="absolute top-0 -right-20 w-80 h-60 rounded-full bg-primary-100/70 blur-xl" />
      <div className="absolute top-[60vh] left-1/3 w-80 h-80 rounded-full bg-primary-100/70 blur-xl" />
      <div className="absolute top-[70vh] -left-20 w-80 h-60 rotate-45 rounded-full bg-primary-100/70 blur-xl" />
      <div className="absolute top-0 -right-20 w-80 h-60 rounded-full bg-primary-100/70 blur-xl" />
      <div className="relative z-10">
        
        <Header />

        
        <div className="">{children}</div>

        
        <Footer />
      </div> */}

      <div>
        {/* header */}
        <Header />

        {/* body */}
        <div className="relative">{children}</div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

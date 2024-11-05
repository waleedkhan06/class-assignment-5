import React from 'react';
import Header from './components/Header';

const Page = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen flex flex-col lg:flex-row">
        
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start
         p-6 md:p-10 lg:p-12">
          <h2 className="font-libreBodoni text-[32px] md:text-[40px] 
          lg:text-[48px] font-bold leading-[40px] md:leading-[50px] 
          lg:leading-[55.8px] tracking-[0.025em]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h2>
          <p className="font-libreBodoni text-[18px] md:text-[22px] 
          lg:text-[25px] font-medium leading-[28px] md:leading-[32px]
           lg:leading-[35.35px] tracking-[0.025em] text-textcolor mt-4">
            An example of intricate workmanship and detail, elegant necklaces
             and long and short chains form a part of our desirable collection.
          </p>
          <div className="mt-6">
            <button className="bg-buttoncolor p-3 md:p-3 w-[180px] 
            md:w-[240px] lg:w-[288px] h-[48px] md:h-[50px] lg:h-[58px]
             text-white font-semibold text-base md:text-lg rounded-xl">
              Explore Now
            </button>
          </div>
        </div>

        {/*Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center
         p-6 md:p-8 lg:p-12">
          <img 
            src="image.png" 
            alt="Hero Image" 
            className="w-[250px] h-[350px] md:w-[350px] md:h-[450px]
             lg:w-[550px] lg:h-[450px] object-contain" 
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

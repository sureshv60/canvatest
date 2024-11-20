import * as React from 'react';

const Home = () => {
  return (
    <div className="pt-5 pl-3">
      <div className="w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] rounded-md overflow-hidden">
        <button className="px-4 py-2 text-[15px] flex overflow-hidden text-center bg-[#27a266ad] text-white rounded-[3px] font-medium hover:bg-[#1e830f] absolute top-3 right-3">
          Custom Size
        </button>

        <div>
          <h2 className="text-3xl pb-10 pt-6 font-semibold text-white">
            What Will You Design Today
          </h2>
        </div>

      </div>
    </div>
  );
}

export default Home;

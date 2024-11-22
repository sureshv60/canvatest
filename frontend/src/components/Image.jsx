import * as React from 'react';

const Image = () => {
  return (
    <div className='grid grid-cols-2 gap-2'>
        {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map((img, i) => <div key={i} className={`group w-full rounded-md overflow-hidden bg-[#ffffff] cursor-pointer`}>
                <img className='w-full h-full' src='http://localhost:5173/canva.png' />
            </div>)
    
    }
    </div>
  )
}


export default Image;

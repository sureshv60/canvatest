import React from 'react';

const TemplateDesign = ({type}) => {
  return (
    <>
        {
            [1,2,3,4].map((design, i) => <div key={design} className='group w-full rounded-md overflow-hidden bg-[#ffffff] cursor-pointer'>
                        <img className='w-full h-full' src='http://localhost:5173/canva.png' alt=''/>
            </div>)
        }
    </>
  )
}

export default TemplateDesign

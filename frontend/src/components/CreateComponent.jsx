import React from 'react';

const CreateComponent = ({info}) => {
  console.log(info)
  let html = ''

  if (info.name === 'main_frame') {
    html = (
      <div
        onClick={() => info.setCurrentComponent(info)}
        className="hover:border-[2px] hover:border-indigo-500 shadow-md"
        style={{
          width: info.width + "px",
          height: info.height + "px",
          background: info.color,
          zIndex: info.z_index
        }}
      >
        {
            info.image && <img src={info.image} alt='image' />
        }
      </div>
    );
  }

  return html
}

export default CreateComponent;

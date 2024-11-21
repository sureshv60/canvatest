import React, {useState} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTextHeight } from 'react-icons/fa';
import { FaFolderOpen } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaShapes } from 'react-icons/fa';
import TemplateDesign from './../components/main/TemplateDesign';

const Main = () => {
 const [state, setState] = useState('')
 const [show, setShow] = useState({
    state: true,
    name: ''
 })

 const setElements = (type, name) => {
    setState(type)
    setShow({
        state: false,
        name 
    })
    console.log(show.name)
 }

  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen">
        <div className="w-[80px] bg-[#18191b] z-50 h-full text-gray-400 overflow-y-auto">
          <div onClick={() => setElements('design', 'design')} className="{`${show.name === 'design' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}">
            <span className="text-2xl">
              <LuLayoutTemplate />
            </span>
            <span className="text-xs font-medium">Design</span>
          </div>
          <div onClick={() => setElements('shape', 'shape')} className="{`${show.name === 'shape' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}">
            <span className="text-2xl">
              <FaShapes />
            </span>
            <span className="text-xs font-medium">Shapes</span>
          </div>
          <div onClick={() => setElements('image', 'uploadImage')} className="{` ${show.name === 'image' ? 'bg-[#46484b]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}">
            <span className="text-2xl">
              <FaCloudUploadAlt />
            </span>
            <span className="text-xs font-medium">Upload</span>
          </div>

          <div onClick={() => setElements('text', 'text')}  className="{`${show.name === 'text' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}">
            <span className="text-2xl">
              <FaTextHeight />
            </span>
            <span className="text-xs font-medium">Text</span>
          </div>

          <div onClick={() => setElements('project', 'projects')} className="{` ${show.name === 'project' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}">
            <span className="text-2xl">
              <FaFolderOpen />
            </span>
            <span className="text-xs font-medium">Project</span>
          </div>

          <div onClick={() => setElements('initImage', 'images')} className="{` ${show.name === 'initImage' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}">
            <span className="text-2xl">
              <BsImages />
            </span>
            <span className="text-xs font-medium">Images</span>
          </div>

          <div onClick={() => setElements('background', 'background')} className="{` ${show.name === 'background' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}">
            <span className="text-2xl">
            <RxTransparencyGrid />
            </span>
            <span className="text-xs font-medium">Background</span>
          </div>
        </div>

        <div className='h-full w-[calc(100%-75px)]'>
            <div className={`${show.status ? 'p-0 -left-[350px]': 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                <div onClick={() => setShow({name: '', status: true})} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'>
                  <MdKeyboardArrowLeft />
                </div>
                {
                  state === 'design' && <div className='grid grid-cols-2 gap-2'>
                    <TemplateDesign type='main' />
                  </div>
                }
                {
                  state === 'shape' && <div>
                    Shape
                  </div>
                }
                {
                  state === 'image' && <div>
                    Image
                  </div>
                }
                {
                  state === 'text' && <div>
                    Text
                  </div>
                }
                {
                  state === 'project' && <div>
                    Project
                  </div>
                }
                {
                  state === 'initImage' && <div>
                    initImage
                  </div>
                }
                {
                  state === 'background' && <div>
                    Background
                  </div>
                }
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main
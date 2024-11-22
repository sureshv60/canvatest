import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import TemplateDesign from '../components/main/TemplateDesign';
import MyImages from '../components/MyImages';
import Projects from '../components/Projects';
import Image from '../components/Image';
import CreateComponent from '../components/CreateComponent';


const Main = () => {

    const [state, setState] = useState('')
    const [current_component , setCurrentComponent] = useState('')
    const [color, setColor] = useState('')
    const [image, setImage] = useState('')

    const [show, setShow] = useState({
        status: true,
        name:''
    })

    const setElements = (type,name) => {
        setState(type)
        setShow({
            state:false,
            name
        })
    }
    const [components , setComponents] = useState([
        {
        name: "main_frame",
        type: "rect",
        id: Math.floor((Math.random() * 100) + 1),
        height: 500,
        width: 650,
        z_index: 1,
        color: '#fff',
        image: "",
        setCurrentComponent: (a) => setCurrentComponent(a)
        }
    ])

    const moveElement = () => {
        console.log('move element')
    }

    const resizeElement = () => {
        console.log('resize element')
    }

    const rotateElement = () => {
        console.log('rotate element')
    }

    const removeComponent = () => {
        console.log('removeComponent')
    }

    const remove_background = () => {
      const com = components.find(c => c.id === current_component.id)
      const temp = components.filter(c => c.id !== current_component.id)
      com.image = ''
      setImage('')
      setComponents([...temp, com]) 
    }

    useEffect(() => {
      if (current_component) {
        const index = components.findIndex(
          (c) => c.id === current_component.id
        );

        const temp = components.filter((c) => c.id !== current_component.id);

        if (current_component.name === "main_frame") {
          components[index].image = image || current_component.image;
        }
        components[index].color = color || current_component.color;
        setComponents([...temp, components[index]]);
      }
         
      }, [color])


    return (
<div className='min-w-screen h-screen bg-black'>
    <Header/>

    <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto'>
       
        <div onClick={() => setElements('design','design')} className={` ${show.name === 'design' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
            <span className='text-2xl'><LuLayoutTemplate /></span>
            <span className='text-xs font-medium'>Design</span>
            </div>

        <div onClick={() => setElements('shape','shape')} className={`${show.name === 'shape' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaShapes /></span>
        <span className='text-xs font-medium'>Shapes</span>
        </div>

        <div onClick={() => setElements('image','uploadImage')} className={`${show.name === 'uploadImage' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaCloudUploadAlt  /></span>
        <span className='text-xs font-medium'>Upload</span>
        </div>

        <div onClick={() => setElements('text','text')} className={`${show.name === 'text' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaTextHeight  /></span>
        <span className='text-xs font-medium'>Text</span>
        </div>


        <div onClick={() => setElements('project','projects')} className={` ${show.name === 'projects' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaFolderOpen  /></span>
        <span className='text-xs font-medium'>Project</span>
        </div>

        <div onClick={() => setElements('initImage','images')} className={` ${show.name === 'images' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><BsImages   /></span>
        <span className='text-xs font-medium'>Images</span>
        </div>

        <div onClick={() => setElements('background','background')} className={`${show.name === 'background' ? 'bg-[#252627]' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><RxTransparencyGrid   /></span>
        <span className='text-xs font-medium'>Background</span>
        </div> 
        </div>
    


    <div className='h-full w-[calc(100%-75px)]'>
        <div className={`${show.status ? 'p-0 -left-[350px]': 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
            <div onClick={() => setShow({name: '' ,status: true })} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'>
            <MdKeyboardArrowLeft />
            </div>
            {
                state === 'design' && <div className='grid grid-cols-2 gap-2'>
                    <TemplateDesign type='main' />
                </div>
            }
            {
                state === 'shape' && <div className='grid grid-cols-3 gap-2'>
                    <div className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                    <div className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                    <div style={{clipPath: 'polygon(50% 0, 100% 100%, 0 100%'}} className='h-[90px] bg-[#3c3c3d] cursor-pointer  '></div>
                    
                </div>
            }
            {
                state === 'image' && <MyImages/>  
            }
            {
                state === 'text' && <div>
                    <div className='grid grid-cols-1 gap-2'>
                    <div className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
                    <h2>Add A Text </h2>
                    </div>
                    </div>
                </div>
            }
            {
                state === 'project' &&  <Projects />
            }
            {
                state === 'initImage' && <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                    <Image/>
                </div>
            }
            {
                state === 'background' && <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
           <div className='grid grid-cols-2 gap-2'>
            {
                [1,2,3,4,5,6].map((img, i) => <div key={i} onClick = {() => setImage('http://localhost:5173/canva.png')}className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                <img className='w-full h-full object-fill' src="http://localhost:5173/canva.png" alt="" />
                </div>
                )
            }
            </div>
                    
                </div>
            }

        </div>

    <div className='w-full flex h-full'>
        <div className={`flex justify-center relative items-center h-full ${!current_component ? 'w-full' : "w-[calc(100%-250px)] overflow-hidden"}`}>
            <div className='m-w-[650px] m-h-[500px] flex justify-center items-center overflow-hidden'>
            <div id='main_design' className='w-auto relative h-auto overflow-hidden' >
                {
                    components.map((c,i) => <CreateComponent key={i} info={c} current_component={current_component} removeComponent={removeComponent} />
                    )
                }
            </div>
            </div>

        </div>

    {
        current_component && <div className='h-full w-[250px] text-gray-300 bg-[#252627] px-3 py-2'>
            <div className='flex gap-6 flex-col items-start h-full px-3 justify-start'>
                <div className='flex gap-4 justify-start items-start mt-4'>
                <span>Color :</span>
                <label className='w-[30px] h-[30px] cursor-pointer rounded-sm' style={{ background: `${current_component.color && current_component.color !== '#fff' ? current_component.color : 'gray' }` }}  htmlFor="color"></label>
                <input onChange={(e) => setColor(e.target.value)} type="color" className='invisible'  id="color" />
                </div>
                {
                      (current_component.name === 'main_frame' && current_component.image) && <div className='p-[6px] bg-slate-600 text-white' onClick={remove_background}>
                        Remove Background
                      </div>
                }

            </div>

        </div>
    }





        
    </div>    





    </div> 
    </div>
    
</div>
    );
};

export default Main;
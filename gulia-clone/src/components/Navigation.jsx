import React, { useRef } from 'react'
import heroSectionVideo from '../assets/heroSectionVideo.mp4';
// import './src/index.css';
import imageOne from '../assets/imageONE.jpeg';
import imageTwo from '../assets/imageTWO.jpeg';
import imageThree from '../assets/imageTHREE.jpg';
import imageFour from '../assets/imageFour.jpg';
import imageFive from '../assets/imageFive.jpg';
import gsap from 'gsap';
const Navigation = () => {
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const imageSlide1 = useRef(null);
  const imageSlide2 = useRef(null);
  const divRef = useRef(null);
  const div2Ref = useRef(null);
  const handleScroll = () => {
    gsap.to(imageSlide1.current, {
      x: -8,
      duration: 1,
      ease: "power1.out"
    });
    gsap.to(imageSlide2.current, {
      x: 8,
      duration: 1,
      ease: "power1.out"
    });
  };
  const handleMouseEnter = () => {
    gsap.to(divRef.current, {
      width: "100px",
      height: "120px",
      rotate: -20,
      filter: "blur(2px)",
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(divRef.current, {
          filter: "blur(0px)",
          duration: 0.2,
          ease: "power2.out",
        });
      },
    });
    
  };

  const handleMouseLeave = () => {
    gsap.to(divRef.current, {
      width: "64px", // Reset width
      height: "80px", // Reset height
      rotate: 0, // Reset rotation
      filter: "blur(0px)", // Reset blur
      duration: 0.4, // Animation duration
      ease: "power2.out",
    });
    gsap.to(dot1Ref.current, {
      y: 0, // Reset dot1 position
      duration: 0.3,
      ease: "power1.out",
    });
    gsap.to(dot2Ref.current, {
      y: 0, // Reset dot2 position
      duration: 0.3,
      ease: "power1.out",
    });
  };
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between items-center px-8 py-4 backdrop-blur-sm fixed z-50 w-full bg-main'>
      {/* Three first links */}
      <div className='flex gap-8 items-center'>
        <div className='border-gray-100 border-[1px] rounded-[24px] text-[0.75rem] font-medium px-4 py-[0.3rem]'>
          STILLS
        </div>
        <div className='border-gray-100 border-[1px] rounded-[24px] text-[0.75rem] font-medium px-4 py-[0.3rem]'>
          MOTION
        </div>
        <div className='border-gray-100 border-[1px] rounded-[24px] text-[0.75rem] font-medium px-4 py-[0.3rem]'>
          ABOUT
        </div>
      </div>
      {/* Logo */}
      <div 
      className='relative w-[60px] h-[30px]' 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
          <path d="M14.213 12.3429C14.213 11.0609 14.7216 10.077 15.7091 9.62981V9.54037H9.87427V9.62981C10.8318 10.077 11.3704 11.0609 11.3704 12.3429V20.3329C11.3704 22.0919 10.3829 23.195 8.64747 23.195C4.99698 23.195 3.23158 19.4087 3.23158 12.0149C3.23158 5.48571 4.66784 1.58012 8.1388 1.58012C10.6822 1.58012 12.0586 3.72671 12.7169 6.55901H12.8066L14.2429 1.58012C12.5972 1.01366 10.8019 0.745341 9.21599 0.745341C3.38119 0.745341 0 5.60497 0 12.5516C0 20.0944 4.3387 23.8509 8.73724 23.8509C11.3405 23.8509 13.7641 23.5528 15.4398 23.2547V23.1652C14.6319 22.8075 14.213 21.9429 14.213 20.6012V12.3429Z" fill="currentcolor"></path>
          <path d="M16.9167 23.5528H21.6145V23.4634C21.016 23.0758 20.6869 22.2112 20.6869 21.0484V8.10932H20.627C19.7593 8.97391 18.2034 9.68944 16.8868 9.68944V9.77888C17.7844 10.1963 17.9939 11.2696 17.9939 12.2534V21.0484C17.9939 22.2112 17.6049 23.046 16.9167 23.4634V23.5528Z" fill="currentcolor"></path>
          <path d="M31.3136 22.0025V24H31.4034C32.4507 23.2547 33.7972 22.8969 35.1137 22.8969V22.8075C34.3059 22.3602 33.9468 21.7043 33.9468 20.3925V8.10932H33.857C33.0192 9.00373 31.5231 9.68944 30.2365 9.68944V9.77888C31.0144 10.1963 31.3136 10.882 31.3136 12.1938V20.154C29.9971 21.4957 28.8002 22.0621 28.0222 22.0621C26.9151 22.0621 26.4064 21.1677 26.4064 19.9155V8.10932H26.3167C25.4788 9.00373 23.9827 9.68944 22.6961 9.68944V9.77888C23.4442 10.1963 23.8032 10.882 23.8032 12.1938V20.8696C23.8032 22.6882 24.7308 24 26.4064 24C28.1419 24 30.1168 22.1516 31.3436 20.482H31.3735C31.3436 20.8398 31.3136 21.436 31.3136 22.0025Z" fill="currentcolor"></path>
          <path d="M39.9391 0H39.8195C39.0116 0.894409 37.4257 1.58012 36.139 1.58012V1.66956C36.7973 2.08696 37.2462 3.04099 37.2462 4.1441V21.0484C37.2462 22.2112 36.8871 23.0161 36.2587 23.4634V23.5528H40.9565V23.4634C40.2982 23.046 39.9391 22.2112 39.9391 21.0484V0Z" fill="currentcolor"></path>
          <path d="M42.2219 23.5528H46.9196V23.4634C46.3212 23.0758 45.992 22.2112 45.992 21.0484V8.10932H45.9322C45.0645 8.97391 43.5085 9.68944 42.1919 9.68944V9.77888C43.0896 10.1963 43.2991 11.2696 43.2991 12.2534V21.0484C43.2991 22.2112 42.9101 23.046 42.2219 23.4634V23.5528Z" fill="currentcolor"></path>
          <path d="M60 22.5689L59.9102 22.4497C59.5811 22.718 59.2519 22.8671 58.9228 22.8671C58.2645 22.8671 57.9653 22.3304 57.9653 21.3466C57.9653 18.6335 58.0551 13.8932 58.0551 11.3888C58.0551 9.36149 56.6188 8.10932 54.1652 8.10932C51.5321 8.10932 48.6296 9.89814 48.6296 11.7764C48.6296 12.5217 49.1383 13.0584 49.7667 13.0584C51.8313 13.0584 51.562 8.7354 53.9857 8.7354C54.9133 8.7354 55.4219 9.45093 55.4219 10.7329C55.4219 11.6273 55.392 13.0882 55.392 14.7279C50.4549 15.6224 48.0312 18.1267 48.0312 20.6311C48.0312 22.6286 49.3777 23.9702 50.9336 23.9702C52.4297 23.9702 54.0156 22.8969 55.3022 21.3466H55.3322C55.3322 21.436 55.3322 21.5255 55.3322 21.6149C55.3322 23.2547 56.2298 24 57.3968 24C58.3543 24 59.4315 23.3739 60 22.5689ZM50.784 19.9155C50.784 18.0075 51.6218 16.0099 55.392 15.1453C55.3621 17.113 55.3322 19.2596 55.3322 20.959C54.2849 21.9727 53.3573 22.3304 52.5793 22.3304C51.4124 22.3304 50.784 21.436 50.784 19.9155Z" fill="currentcolor"></path>
        </svg>
        {/* Animated Dots */}
        <div className="absolute top-[-10px] left-0 right-0 flex justify-between">
          <div
            ref={dot1Ref}
            className="w-[0.2rem] h-[0.2rem] bg-current rounded-full ml-[1.1rem] mt-[0.8rem]"
          ></div>
          <div
            ref={dot2Ref}
            className="w-[0.2rem] h-[0.2rem] bg-current rounded-full mt-[0.8rem] mr-[0.9rem]"
          ></div>
        </div>
      </div>
      {/* Three last links */}
      <div className='flex gap-8 items-center'>
      <div className='border-gray-100 border-[1px] rounded-[24px] text-[0.75rem] font-medium px-4 py-[0.3rem]'>
        INSTAGRAM
      </div>
      <div className='border-gray-100 border-[1px] rounded-[24px] text-[0.75rem] font-medium px-4 py-[0.3rem]'>
        EMAIL
      </div>
      <div className='flex gap-2 border-gray-100 border-[1px] rounded-[24px] text-[0.75rem] font-medium px-4 py-[0.3rem]'>
        F/24
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#f3f6fa" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
        {/* Ligh icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
        </div>
      </div>
      </div>
      </div>
      {/* Now the Hero section comes after */}
      <div className='flex w-[90%] justify-center text-center m-auto h-[500px] rounded-[32px] relative mt-20 mb-40'>
        <video 
        autoPlay 
        loop 
        muted
        playsInline 
        className="rounded-[32px] w-full object-cover h-full"
        >
        <source src={heroSectionVideo} type="video/mp4"/>
        </video>
        {/* Headers */}
        <div className='absolute top-24 m-auto left-48'>
          <div className='flex justify-center'>
            <h1 className='font-heading text-headlines -tracking-3 font-extralight text-center'>
              GIULIA &nbsp;
            </h1>
            <h1 className='font-heading text-headlines -tracking-3'>
              GARTNER &nbsp;
            </h1>
          </div>
          <div className='flex justify-center -mt-[3rem]'>
            <h1 className='font-heading text-headlines -tracking-3 font-extralight'>
              PHOTOGRAPHER &nbsp;
            </h1>
            <h1 className='font-heading text-headlines -tracking-3'>
              & &nbsp;
            </h1>
          </div>
          <div className='flex justify-center -mt-[3rem]'>
            <h1 className='font-heading text-headlines -tracking-3 font-extralight'>
              FILMMAKER
            </h1>
          </div>
        </div>
      </div>
      {/* Second section */}
      <div className='flex flex-col m-auto items-center content-center mb-[48px]'>
        <div className='flex items-center'>
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            A&nbsp;
          </h2>
          <div
          ref={divRef} 
          className='w-[64px] h-[80px]'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >
            <img src={imageOne} alt="" className='rounded-xl' />
          </div>
          
          &nbsp;
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            Tiny&nbsp;
          </h2>
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            mountain&nbsp;
          </h2>
        </div>
        <div className='flex items-center'>
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            village&nbsp;
          </h2>
          <div
          ref={div2Ref}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='w-[64px] h-[80px]'
          >
            <img src={imageTwo} alt="" className='rounded-xl'/>
          </div>
          
          &nbsp;
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            where&nbsp;
          </h2>
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            it&nbsp;
          </h2>
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            all&nbsp;
          </h2>
        </div>
        <div className='flex items-center content-start'>
          <h2 className='font-heading text-smallHeadlines -tracking-3'>
            began&nbsp;
          </h2>
          <div className='bg-white w-3 h-3 rounded-full mt-6'></div>
          &nbsp;
          <div className='bg-white w-3 h-3 rounded-full mt-6'></div>
          &nbsp;
          <div className='bg-white w-3 h-3 rounded-full mt-6'></div>
          &nbsp; &nbsp;
          <div className='w-[120] h-[80]'>

          </div>
          <img src={imageThree} alt="" width={120} height={80} className='rounded-xl'/>
        </div>
      </div>
      {/* The end of third section */}
      <div className='text-center m-auto w-[50%] flex flex-col justify-center items-center mb-40'>
        <p className='font-paragraphs font-medium leading-[1.6]'>Giulia Gartner (@guiliagarterner) is an outdoor, travel, and commercial photographer, filmmaker, and storyteller from the Dolomites in northern Italy. Her work focuses on capturing wild and rugged landscapes with a vivid color palette and dreamy elements. Her love for photography has spilled over into filmmaking which is one of the main creative outlets she pursues today.</p>
        <div className='border-gray-100 border-[1px] rounded-[24px] text-[0.7rem] font-medium px-4 py-[0.5rem] w-fit mt-[48px]'>
          READ MY STORY
        </div>
      </div>
      {/* Fourth Section */}
      
        {/* Animated images */}
      <div 
      className='flex relative top-0'
      onScroll={handleScroll}
      >
        <div
        ref={imageSlide1}
        className='absolute right-40 top-4 rotate-1'
        >
          <img
          src={imageFour}
          className='rounded-[32px] w-[600px] h-[506px]'
          alt="" 
          />
        </div>
        {/*  */}
        <div className='flex flex-col justify-center gap-[128px] m-auto w-[50%] items-center'>
        <div className='flex items-center gap-6'>
          <h3 className='text-[0.9rem] font-[600] text-white font-sans'>MARCH 2023</h3>
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L-8.26528e-07 8L-4.76837e-07 -6.99382e-07L16 4Z" fill="currentcolor"></path>
          </svg>
          <h3 className='text-[0.9rem] font-[600] text-white font-sans'>GREENLAND</h3>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='font-heading text-headlines -tracking-3 font-extralight text-center'>
            Visit
          </h1>
          <h1 className='font-heading text-headlines -tracking-3 font-extralight text-center'>
            Greenland
          </h1>
          <div className='border-gray-100 border-[1px] rounded-[24px] text-[0.7rem] font-medium px-4 py-[0.5rem] w-fit mt-[48px]'>
          SEE CASE STUDY
        </div>
        </div>
        </div>
        {/*  */}
        <div className='absolute top-4 left-40 -rotate-1'
        ref={imageSlide2}
        >
          <img
            src={imageFive}
            className='rounded-[32px] w-[600px] h-[506px]'
            alt="" 
          />
        </div>
      </div>
      </div>
  )
}

export default Navigation

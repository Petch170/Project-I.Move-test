import React from 'react'
import { animateScroll } from 'react-scroll';
import upIcon from "/upIcon.svg";


const Scrolltop = () => {
    const scrollToTop = ()=>{
        animateScroll.scrollToTop({ duration: 500,
            smooth: true,});
      };
      
  return (
    <div className="fixed bottom-10 right-10 cursor-pointer z-50 flex items-center justify-center w-10 h-10 rounded-xl text-center bg-white border border-[#102C57]" onClick={scrollToTop}>
       <img src={upIcon} alt="upicon" width={24} className="hover:text-blue-700 "/>
    </div>
  )
}

export default Scrolltop
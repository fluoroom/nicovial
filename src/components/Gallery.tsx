"use client"
import React, {useEffect, useLayoutEffect} from 'react'

const Gallery = ({leftPadding, children}) => {
  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  })
  useLayoutEffect(()=>{
  const mediaQuery = window.matchMedia('(min-width: 901px)')
  if(leftPadding){
    if(mediaQuery.matches){
      document.getElementById('gallery').style.paddingLeft='35vw'
    }else{
      document.getElementById('gallery').style.paddingLeft='65vw'
    }
  
  };
});
  return(
      <>
    <style jsx>{`
    @media(min-width:901px){
      #gallerycontainerouter{
        height:100vh;
        height: calc(var(--vh, 1vh) * 100);
        width:100vw;
        overflow:hidden;
        position:absolute;
        z-index:9;
      }
      #gallerycontainer{
        transform:rotate(270deg) translateY(-100%);
        transform-origin:top right;
        scrollbar-width:none;
        overflow-x:auto;
        height:100vw;
      }
      ::-webkit-scrollbar {
        display: none;
    }
      #gallery{
        display:flex;
        align-items:center;
        flex-direction:row;
        justify-content:flex-start;
        transform:rotate(90deg) translateX(100%);
        transform-origin:top right;
        height:100vh;
      }
      #gallery:after{
        content:' ‎';
      }
    }
      @media(max-width:900px){
        #gallerycontainerouter{
          height:100vh;
          height: calc(var(--vh, 1vh) * 100);
          width:100vw;
          overflow:hidden;
          position:relative;
          z-index:9;
        }
        #gallerycontainer{
          scrollbar-width:none;
          overflow-x:auto;
        }
        ::-webkit-scrollbar {
          display: none;
      }
        #gallery{
          display:flex;
          align-items:center;
          flex-direction:row;
          justify-content:flex-start;
          height:100vh;
        }
        #gallery:after{
          content:' ‎';
        }
      }
    `}
    </style>
    <div id="gallerycontainerouter">
    <div id="gallerycontainer">
    <div id="gallery">
        {children}
    </div></div></div>
    </>
)
    }

export default Gallery

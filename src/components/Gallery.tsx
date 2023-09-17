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
    <div id="gallerycontainerouter">
    <div id="gallerycontainer">
    <div id="gallery">
        {children}
    </div></div></div>
    </>
)
    }

export default Gallery

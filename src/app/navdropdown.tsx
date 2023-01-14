'use client';

import { FC, useEffect, useRef } from "react"

interface NAVINTER {
  children: any;
}

export default function ({ click, children }) {

  const ref: any = useRef([]);

  const data = children.map((child: any, index: number) => {
    return <div
      style={{height:'0px', backgroundColor: '#c084fc', animationDirection: "ease-in-out .2s", transition: '.2s',transform:'scale(0)'}}
      key={index}
      ref={(element) => { ref.current[index] = element }}
    >

      {child}

    </div >
  });    
  useEffect(() => {

    ref.current.forEach(((r: any, index: number) => {

      setTimeout(() => {
        // if (!click) r.style.display = 'none';
        if (!click) r.style.padding = '0px';
        if (!click) r.style.height = '0px';
        if (!click) r.style.borderBottom = 'none';
        if (!click) r.style.transform = 'scale(0)';

        if (click) r.style.height = '40px';
        if (click) r.style.padding = '10px';
        if (click) r.style.borderBottom = '1px solid white';
        if (click) r.style.transform = 'scale(1)';

      }, 20 * index)

    }))

  }, [click]);

  return (
    <>
      {data}
    </>
  )
}
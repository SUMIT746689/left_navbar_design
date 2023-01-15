'use client';

import React, { FC, useEffect, useRef } from "react"

interface NAVINTER {
  click: boolean;
  children: any;
}

export default function ({ click, children }: NAVINTER) {

  const ref: any = useRef([]);

  const data = children.map((child: any, index: number) => {
    return <div
      style={{ height: '0px', padding: '0px', backgroundColor: '#c084fc', transitionDuration: '500ms', overflow: 'hidden' }}
      key={index}
      ref={(element) => { ref.current[index] = element }}
    >

      {child}

    </div >
  })

  useEffect(() => {
    // const totalLength = ref.current.length 
    ref.current.forEach(((r: any, index: number) => {
      // let totalTime = 1000 / totalLength;
      setTimeout(() => {
        if (!click) r.style.height = '0px';
        if (!click) r.style.opacity = '0';
        if (!click) r.style.padding = '0';
        if (!click) r.style.transform = 'translateX(-100%)';
        if (!click) r.style.borderBottom = 'none';

        if (click) r.style.height = '40px';
        if (click) r.style.opacity = '1';
        if (click) r.style.padding = '8px';
        if (click) r.style.transform = 'translateX(0px)';
        if (click) r.style.borderBottom = '1px solid white';

      }, 25 * index)

    }))

  }, [click]);

  return (
    <>
      {data}
    </>
  )
}
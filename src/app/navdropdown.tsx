'use client';

import { FC, useEffect, useRef } from "react"

interface NAVINTER {
  children: any;
}

export default function ({ click, children }) {

  const ref: any = useRef([]);

  const data = children.map((child: any, index: number) => {
    return <div
      style={{ display:'none',padding: '10px', borderBottom: '1px solid white', backgroundColor: '#c084fc' }}
      key={index}
      ref={(element) => { ref.current[index] = element }}
    >

      {child}

    </div >
  })

  useEffect(() => {

    ref.current.forEach(((r: any, index: number) => {

      setTimeout(() => {
        if (!click) r.style.display = 'none';
        if (click) r.style.display = 'block';
      }, 25 * index)

    }))

  }, [click]);

  return (
    <>
      {data}
    </>
  )
}
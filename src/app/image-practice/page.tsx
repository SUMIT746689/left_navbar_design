'use client'
import Image from "next/legacy/image";

const blurImg = <svg height="110" width="110">
  <defs>
    <filter id="f1" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
    </filter>
  </defs>
  <rect width="90" height="90" stroke="green" stroke-width="3"
    fill="yellow" filter="url(#f1)" />
</svg>


export default function () {

  return <>
    hi ... images
    <div>
      <div>

      </div>

      <div style={{backgroundColor:'red',display:"grid",gridTemplateColumns: "repeat(4, minmax(0, 1fr))",gap:'10px'}}>
        <div style={{ position: 'absolute', height: '30vh',width:'125px',backgroundColor:'green',borderRadius:'15px',left:'0',bottom:'0' }}>
          <Image layout="fill" objectFit="contain" src='/images/2.webp' blurDataURL="/images/blur.webp" placeholder="blur" style={{padding:'10px'}} />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="cover" src='/images/2.webp' blurDataURL="/images/blur.webp" placeholder="blur" />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="contain" src='/images/2.webp' blurDataURL="/images/blur.webp" placeholder="blur" />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="contain" src='/images/2.webp' blurDataURL="/images/blur.webp" placeholder="blur" />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="contain" src='/images/2.webp' blurDataURL="/images/blur.webp" placeholder="blur" />
        </div>
      </div>
    </div>
  </>
}
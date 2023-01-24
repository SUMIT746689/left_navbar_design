'use client'
import Image from "next/legacy/image";

export default function () {

  return <>
    hi ... images
    <div style={{ backgroundColor: 'white' }}>
      <div>

      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: '10px' }}>
        <div style={{ position: 'absolute', height: '30vh', width: '125px', backgroundColor: 'green', borderRadius: '15px', left: '0', bottom: '0' }}>
          <Image layout="fill" objectFit="contain" src='/images/loading.svg' blurDataURL="/images/loading.png" placeholder="blur" style={{ padding: '10px' }} />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="cover" src='/images/2.webp' blurDataURL="/images/loading.png" placeholder="blur" />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="contain" src='/images/2.webp' blurDataURL="/images/loading.svg" placeholder="blur" />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="contain" src='/images/2.webp' blurDataURL="/images/loading.png" placeholder="blur" />
        </div>
        <div style={{ position: 'relative', height: '30vh' }}>
          <Image layout="fill" objectFit="contain" src='/images/2.webp' blurDataURL="/images/loading.png" placeholder="blur" />
        </div>
      </div>
    </div>
  </>
}
"use client";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";

const fetchData = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    // if (!res.ok) throw new Error("Failed to fetch");
    console.log({res})
    return res.json();
  }
  catch (err: any) {
    return ({ error: err.message })
  }
}

export default function ClientComponent({ theme }: any) {

  const [count, setCount] = useState(0);
  const [datas, setDatas] = useState([]);

  const fetchFun = async () => {

    const data = await fetchData();

    if (data.error) setDatas([]);

    else setDatas(() => data.products);
  }

  useEffect(() => {
    fetchFun();
  }, [])

  return (
    <>
      <div>
        hi client, you clicked {count} times.
      </div>
      <button onClick={() => setCount((c) => c + 1)} >hi server</button>

      {datas?.map((data: any) => (
        <div key={data.id}>
          <div>{data.id} {data.title}</div>
        </div>
      ))}
    </>
  )
}
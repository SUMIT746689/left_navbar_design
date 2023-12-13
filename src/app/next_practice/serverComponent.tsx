import { headers } from "next/headers";

const fetchData = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    // if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  }
  catch (err: any) {
    return ({ error: err.message })
  }
}

export default async function ServerComponent({ theme }: any) {
  
  const response = await fetchData();

  return (
    <>
      <div>hi server</div>
      <div>
        {
          response.products.map((product: any) => (
            <div>
              {product.id}
              {product.title}
            </div>
          ))
        }
      </div>
    </>
  )
}
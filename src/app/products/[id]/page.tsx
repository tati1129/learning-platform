import Image from "next/image"

// import { FC } from "react";

// interface Props{
//     params: Promise<{id: string}>;
// }

// const ProductPage: FC<Props> = async({params})=>{
//     const {id} = await params;
// }

// export default ProductPage;

const ProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

    const {id} = await params;
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const product = await res.json();

    return <div>
        <h2>{product.title}</h2>
          <Image
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={400}
        unoptimized
      />

    </div>
};

export default ProductPage;
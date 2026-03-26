import Image from "next/image"

// import { FC } from "react";

// interface Props{
//     params: Promise<{id: string}>;
// }

// const ProductPage: FC<Props> = async({params})=>{
//     const {id} = await params;
// }

// export default ProductPage;

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {

    const {id} = await params;
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
    const category = await res.json();

    return <div>
        <h2>{category.name}</h2>
          <Image
        src={category.image}
        alt={category.name}
        width={300}
        height={400}
        unoptimized
      />

    </div>
};

export default CategoryPage;
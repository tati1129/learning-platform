import Product from "@/types/Product";
import Link from "next/link";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: Product[] = await res.json();
  console.log("Hi");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 m-4 p-4">
      {products.map((prod) => (
        <div
          key={prod.id}
          className="rounded-2xl shadow bg-gray-100 p-2 transition-all transform hover:scale-105 hover:bg-pink-100 dark:hover:bg-gray-700"
        >
          <img
                src={prod.images[0]}
                alt={prod.title}
                className="w-full h-30  object-contain rounded-xl"
              />
          <Link href={`/products/${prod.id}`} className="block">
            <div className="flex flex-col items-center space-y-1">
              
              <div className="flex flex-wrap flex-col justify-between i p-2 gap-2">
                <p className="text-sm font-medium">{prod.title}</p>
                <p className="text-xs text-gray-500">{prod.price} $</p>
                <p className="text-sm ">{prod.category.name}</p>
              </div>
              <div>

              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
// SERVER COMPONENTS
// SSG - Static Site Generation -  когда один раз генерируется при билде - и дальше не меняется
// SSR - Server Side Rendering - на каждый запрос
// ISR - Incremental Static Regeneration - когда например по таймеру или при определенных условиях
// {next: {revalidate: 60}}

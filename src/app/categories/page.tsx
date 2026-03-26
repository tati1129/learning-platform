import Category from "@/types/Category";
import Link from "next/link";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories: Category[] = await res.json();
  console.log("Hi");
  //   const categoriesList = (
  //   <ul>
  //     {categories.map((c) => (
  //       <li key={c.id}>{c.name}</li>
  //     ))}
  //   </ul>
  // );

  return (
    <div className="flex flex-wrap gap-3 min-h-60  p-2 m-3 justify-center ">
      {categories.map((categ) => (
        <div
          key={categ.id}
          className="w-1/7 flex m-2  p-3 flex-col items-center rounded-2xl shadow bg-gray-100 center transition-all transform hover:scale-130 hover:bg-pink-100 dark:hover:bg-gray-700
              cursor-pointer duration-300 ease-in-out"
        >
          <Link href={`/categories/${categ.id}`}>
            <img
              className="w-30 object-cover rounded-md"
              src={categ.image}
              alt={categ.name}
            />
            <p>{categ.name}</p>
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

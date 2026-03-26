import Grids from "@/app/grids/page";
import Link from "next/link";


export default function index() {
  return (
    <nav className="flex flex-wrap bg-violet-200 gap-2 items-center justify-center min-h-24">
        <Link href="/about">About</Link>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/products">Products</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/grids">Crids</Link>
        <Link href="/users">Users</Link>
    </nav>
  )
}

import User from "@/types/User";
import Link from "next/link";

export default async function Users() {
  const res = await fetch("https://api.escuelajs.co/api/v1/users");
  const users: User[] = await res.json();

  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 m-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="rounded-2xl shadow bg-gray-100 p-2 transition-all transform hover:scale-105 hover:bg-pink-100 dark:hover:bg-gray-700">
          <Link href={`/users/${user.id}`}>
            <div className="flex flex-col items-center space-y-1">
              <img src={user.avatar} alt={user.name} className="w-full h-30  object-contain rounded-xl"/>
              {/* <img src={user.avatar} alt={user.name} className="w-24 h-24 object-cover rounded-xl transition-transform duration-300 hover:scale-110"/> */}
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

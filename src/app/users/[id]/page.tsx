import BackButton from "@/components/BackButton";
import Image from "next/image";

const UserPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
  const user = await res.json();

  return (
    <>
      <div>
        <BackButton label={"Back to users"}/>
        <Image
          src={user.avatar}
          alt={user.avatar}
          width={300}
          height={400}
          unoptimized
        />
        <h2>{user.name}</h2>
        <p>{user.role}</p>
      </div>
    </>
  );
};

export default UserPage;

export default function MyPrograms() {
  const programs = [
    { id: 0, title: "Basic Frontend" },
    { id: 1, title: "Advanced Frontend" },
    { id: 2, title: "Backend" },
  ];
  return (
    <div>

      <h2 className="font-bold text-4xl mb-8" > Programs</h2>
      {programs.map((progr) => (
        <li key={progr.id} className="p-2 m-2 rounded-2xl shadow bg-gray-100">{progr.title}</li>
      ))}
    </div>
  );
}

"use client";

export default function BackButton({ label = "Go back" }: { label: string }) {
  return (
    <button
      onClick={() => window.history.back()}
      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
    >
      {label}
    </button>
  );
}

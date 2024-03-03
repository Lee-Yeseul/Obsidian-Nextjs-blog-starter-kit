interface TagProps {
  value: string;
  index: number;
}

export default function Tag({ value, index }: TagProps) {
  const tagPalette = [
    "text-sky-600 bg-sky-100",
    "text-indigo-600 bg-indigo-100",
    "text-rose-600 bg-rose-100",
    "text-blue-600 bg-blue-100",
    "text-violet-600 bg-violet-100",
    "text-red-600 bg-red-100",
    "text-orange-600 bg-orange-100",
  ];

  return (
    <div
      className={`rounded-lg px-2.5 py-1 text-sm font-semibold ${tagPalette[index]}`}
    >
      {value}
    </div>
  );
}

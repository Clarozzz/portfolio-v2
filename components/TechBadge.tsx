export default function TechBadge({ name, children }: { name?: string, children?: React.ReactNode }) {
  return (
    <span className="
      text-md
      flex items-center gap-2
      border
      border-gray-400/50
      rounded-full
      px-3
      py-1
    ">
      {name}
      {children}
    </span>
  );
}
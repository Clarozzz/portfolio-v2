export default function OportunityBadge({ name, children }: { name?: string, children?: React.ReactNode }) {
  return (
    <span className="
      flex items-center gap-2
      border-2
      border-purple-600
      rounded-full
      px-3
      py-1
    ">
      {name}
      {children}
    </span>
  );
}
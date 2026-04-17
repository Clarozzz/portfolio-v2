
export default function BentoItem({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div className={`rounded-3xl px-6 py-6 drop-shadow-md ${className}`}>
      {children}
    </div>
  )
}

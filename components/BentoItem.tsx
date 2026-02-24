
export default function BentoItem({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <div className={`rounded-3xl px-6 py-8 drop-shadow-md ${className}`}>
      {children}
    </div>
  )
}

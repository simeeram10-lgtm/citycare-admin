export function Dialog({ children, open, onOpenChange, ...props }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={() => onOpenChange(false)} className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white rounded-lg shadow-lg" {...props}>{children}</div>
    </div>
  )
}

export function DialogContent({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function DialogHeader({ children, ...props }) {
  return <div className="border-b p-4" {...props}>{children}</div>
}

export function DialogTitle({ children, ...props }) {
  return <h2 className="text-lg font-bold" {...props}>{children}</h2>
}

export function DialogClose({ children, ...props }) {
  return <button {...props}>{children}</button>
}

export function LeafIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2C7 2 2 7 2 13C2 21 12 30 12 30C12 30 22 21 22 13C22 7 17 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M12 30L12 33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 8L12 27" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      <path d="M12 14Q9 12 7 10" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M12 14Q15 12 17 10" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M12 19Q8 17 6 15" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M12 19Q16 17 18 15" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
    </svg>
  )
}

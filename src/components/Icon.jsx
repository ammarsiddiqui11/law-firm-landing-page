const ICONS = {
  briefcase: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M21 12l-9-9-9 9M4.5 10.5V21h15V10.5" />
  ),
  scale: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M5 8l7-5 7 5M5 8v9a2 2 0 002 2h10a2 2 0 002-2V8M5 8l7 4 7-4" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  check: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  globe2: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  ),
}

export default function Icon({ name, className = 'h-8 w-8' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.3">
      {ICONS[name]}
    </svg>
  )
}

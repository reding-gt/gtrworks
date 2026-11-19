import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      onClick={() => {
        setCount((current) => current + 1)
      }}
      className="rounded-lg bg-sky-500 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
    >
      Count is {count}
    </button>
  )
}

interface TagListProps {
  readonly items: readonly string[]
}

export function TagList({ items }: TagListProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm text-sky-300"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

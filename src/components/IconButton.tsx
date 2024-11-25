type Props = {
  Basic: React.FC<{ className: string }>
  Hover: React.FC<{ className: string }>
  onClick: () => void
  name: string
}
export default function IconButton({ Basic, Hover, onClick, name }: Props) {
  return (
    <div
      className="h-6 w-6 group relative mx-auto my-auto cursor-pointer"
      onClick={onClick}
      data-testid={`${name}-iconbutton`}
    >
      <Basic className="absolute inset-0 w-full h-full group-hover:opacity-0 transition-opacity duration-300 stroke-white fill-none" />
      <Hover className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-white" />
    </div>
  )
}

type Props = {
  name: string
  value: string
  onChange: (v: string) => void
  error?: string
  hide?: boolean
}
export default function TextField({ value, onChange, name, hide }: Props){
  const classes = 'py-1 px-2 rounded-xl bg-slate-900 border-slate-100 border w-full h-fit my-auto'
  return (
    <div className="flex flex-col gap-2">
      <label className="w-full h-full pt-1 font-semibold text-center" htmlFor={name}>{name}</label>
      <input
        id={name}
        name={name}
        className={classes}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={hide ? 'password' : 'text'}
      />
    </div>
  )
  
}
import classNames from 'classnames'

const TEXT_ALIGN = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
}

type Props = {
  name: string
  value: string
  onChange: (v: string) => void
  onEnter?: () => void
  error?: string
  hide?: boolean
  align?: 'center' | 'left' | 'right'
  fullwidth?: boolean
}
export default function TextField({
  value,
  onChange,
  onEnter,
  name,
  hide,
  align = 'left',
  fullwidth,
}: Props) {
  const classes = classNames(
    'p-3 rounded-xl bg-slate-900 border-slate-500 border w-full h-fit my-auto',
    TEXT_ALIGN[align],
  )

  return (
    <div className={classNames('flex flex-col gap-2', { 'w-full': fullwidth })}>
      <label
        className={classNames(
          'w-full h-full pt-1 text-slate-300',
          TEXT_ALIGN[align],
        )}
        htmlFor={name}
      >
        {name}
      </label>
      <input
        id={name}
        name={name}
        className={classes}
        value={value}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && onEnter) {
            onEnter()
          }
        }}
        onChange={(e) => onChange(e.target.value)}
        type={hide ? 'password' : 'text'}
      />
    </div>
  )
}

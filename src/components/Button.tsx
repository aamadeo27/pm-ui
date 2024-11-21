import classnames from 'classnames'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  fullwidth?: boolean
  disabled?: boolean
  type?: 'secondary' | 'primary'
}

const COLORS = {
  primary: {
    bg: 'bg-red-500',
    bgInactive: 'bg-red-200',
    text: 'text-white',
    textInactive: 'text-white',
  },
  secondary: {
    bg: 'bg-white',
    bgInactive: 'bg-slate-200',
    text: 'text-black',
    textInactive: 'text-salte-700',
  },
}

export default function ({
  children,
  onClick,
  fullwidth,
  disabled,
  type = 'primary',
}: Props) {
  const background = !disabled ? COLORS[type].bg : COLORS[type].bgInactive
  const text = 'font-semibold text-center text-lg mx-auto'
  const classes = classnames(
    'rounded-3xl py-3 px-5 hover:cursor-pointer',
    background,
    text,
    !disabled ? COLORS[type].text : COLORS[type].textInactive,
    { 'w-fit': !fullwidth },
  )
  return (
    <div
      role="button"
      onClick={!disabled ? onClick : undefined}
      className={classes}
    >
      {children}
    </div>
  )
}

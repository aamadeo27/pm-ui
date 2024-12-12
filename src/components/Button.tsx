import classnames from 'classnames'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  fullwidth?: boolean
  disabled?: boolean
  type?: 'secondary' | 'primary'
  variant?: 'pill' | 'bare' | 'box'
  centered?: boolean
}

const CLASSES = {
  pill: {
    rounded: 'rounded-3xl',
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
      textInactive: 'text-slate-700',
    },
  },
  bare: {
    rounded: 'rounded-xl',
    primary: {
      bg: 'bg-none',
      bgInactive: 'bg-none',
      text: 'text-slate-300 hover:text-slate-100',
      textInactive: 'text-slate-500',
    },
    secondary: {
      bg: 'bg-none',
      bgInactive: 'bg-none',
      text: 'text-yellow-500 hover:text-slate-yellow-300',
      textInactive: 'text-yellow-700',
    },
  },
  box: {
    rounded: 'rounded-xl',
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
      textInactive: 'text-slate-700',
    },
  },
}

export default function ({
  children,
  onClick,
  fullwidth,
  disabled,
  type = 'primary',
  variant = 'pill',
  centered = true,
}: Props) {
  const background = !disabled
    ? CLASSES[variant][type].bg
    : CLASSES[variant][type].bgInactive
  const text = 'text-center text-lg'
  const classes = classnames(
    'py-3 px-5 hover:cursor-pointer h-fit my-auto',
    CLASSES[variant].rounded,
    background,
    text,
    !disabled
      ? CLASSES[variant][type].text
      : CLASSES[variant][type].textInactive,
    { 'w-fit': !fullwidth },
    { 'mx-auto': centered },
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

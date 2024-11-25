import classNames from 'classnames'

export default function Header({ children }: { children: React.ReactNode }) {
  const classes = classNames('text-2xl font-bold', 'p-5')
  return <div className={classes}>{children}</div>
}

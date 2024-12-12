import classNames from 'classnames'
import Cross from '../Icons/Cross'

type Props = {
  children: React.ReactNode
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
  title: string
  onClose: () => void
}

const SIZE = {
  small: 'left-[35vw] w-[30vw] top-[20vh] min-h-[40vh] h-fit',
}

export default function Modal({
  title,
  children,
  primaryAction,
  secondaryAction,
  onClose,
}: Props) {
  const classes = classNames(
    'absolute z-20 rounded-3xl bg-slate-900 text-slate-200',
    'flex flex-col overflow-hidden',
    SIZE.small,
  )

  return (
    <div>
      <div className="absolute inset-0 z-10 w-full h-full bg-black opacity-50"></div>
      <div className={classes}>
        <div className="flex flex-none h-28 w-full py-5 px-8 flex-row">
          <div
            className="flex flex-grow my-auto text-xl font-semibold"
            role="heading"
          >
            {title}
          </div>
          <div className="cursor-pointer" onClick={onClose}>
            <Cross className="h-8 w-8 stroke-1 stroke-slate-500 my-auto hover:stroke-2 hover:stroke-slate-400" />
          </div>
        </div>
        <div className="flex flex-grow border-b border-b border-slate-500 px-8">
          {children}
        </div>
        <div className="flex flex-none h-28 w-full p-5 flex-row">
          {secondaryAction}
          <div className="flex flex-grow"></div>
          {primaryAction}
        </div>
      </div>
    </div>
  )
}

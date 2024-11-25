import { User } from '../../generated/graphql'
import IconButton from '../IconButton'
import NotificationsIconOutline from '../Icons/NotificationsOutline'
import NotificationsIconSolid from '../Icons/NotificationsSolid'

type Props = {
  user: User
}

export default function Topbar({ user }: Props) {
  console.log(user)
  return (
    <div className="h-fit w-full border-b border-slate-800 flex py-5">
      <div className="my-auto h-fit flex flex-row w-full">
        <div className="w-96 flex-none rounded-3xl py-3 px-5 bg-slate-700 text-slate-400 text-sm">
          Search bar
        </div>
        <div className="w-full flex-grow"></div>

        <div
          className="w-12 flex-none my-auto cursor-pointer"
          data-testid="notifications"
        >
          <IconButton
            Basic={NotificationsIconOutline}
            Hover={NotificationsIconSolid}
            onClick={() => null}
            name="notifications"
          />
        </div>

        <div className="w-16 flex-none my-auto cursor-pointer">
          <img
            src="./logo.png"
            alt="avatar"
            className="w-10 h-10 mx-auto"
            data-testid="avatar"
          />
        </div>
      </div>
    </div>
  )
}

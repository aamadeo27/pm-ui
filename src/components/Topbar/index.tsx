import { GetCurrentUserQuery } from '../../generated/graphql'
import Avatar from '../Avatar'
import IconButton from '../IconButton'
import NotificationsIconOutline from '../Icons/NotificationsOutline'
import NotificationsIconSolid from '../Icons/NotificationsSolid'

export type CurrentUser = GetCurrentUserQuery['current_user']

type Props = {
  user: CurrentUser
}

export default function Topbar({ user }: Props) {
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
          <Avatar user={user} />
        </div>
      </div>
    </div>
  )
}

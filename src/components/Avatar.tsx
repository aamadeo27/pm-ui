import { User } from '../generated/graphql'

export default function Avatar({
  user,
}: {
  user: Pick<User, 'name' | 'avatar_url'>
}) {
  if (!user.avatar_url) {
    return (
      <div className="w-10 h-10 rounded-full bg-blue-500 mx-auto">
        <div className="mx-auto py-1 w-2 h-6 text-xl font-semibold">?</div>
      </div>
    )
  }

  return (
    <img
      src={user.avatar_url}
      alt="avatar"
      className="w-10 h-10 mx-auto rounded-full"
      data-testid="avatar"
    />
  )
}

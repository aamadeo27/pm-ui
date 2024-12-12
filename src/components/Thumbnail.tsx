import { Maybe } from '../generated/graphql'

export default function Thumbnail({
  object,
}: {
  object: {
    thumbnail?: Maybe<string>
    name: string
  }
}) {
  if (!object.thumbnail) {
    return (
      <div className="flex w-14 h-14 rounded-full bg-rose-500 text-white">
        <div className="h-fit w-fit my-auto mx-auto text-4xl font-semibold">
          ?
        </div>
      </div>
    )
  }

  return (
    <img
      src={object.thumbnail}
      alt="avatar"
      className="w-14 h-14 mx-auto rounded-full"
      data-testid={`thumbnail-${object.name}`}
    />
  )
}

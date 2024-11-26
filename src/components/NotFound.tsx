import UserPage from './UserPage'

function NotFoundContent() {
  return (
    <div className="h-full w-full overflow-scroll text-white flex flex-row bg-slate-900">
      <div className="mx-auto my-auto h-fit w-fit flex flex-col gap-10">
        <img
          alt="underconstruction"
          src="/underconstruction.png"
          className="h-96"
        />
        <div className="text-3xl font-bold text-center">Not Found</div>
      </div>
    </div>
  )
}

export default function NotFound() {
  return <UserPage PageContent={NotFoundContent} />
}

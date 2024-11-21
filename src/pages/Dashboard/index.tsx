import Page, { PageContentProps } from '../../components/Page'

function Dashboard({ user }: PageContentProps) {
  console.log('Userid: ', user.id)

  return (
    <div className="py-5 flex flex-col gap-5 w-full h-full">
      <div className="w-full flex flex-row">
        <div className="flex-grow border rounded-3xl h-32 my-auto p-5">
          Calendar
        </div>
        <div className="flex-none border rounded-full h-48 w-48 mx-5"></div>
      </div>
      <div className="h-full w-full p-5 flex flex-col rounded-3xl border">
        <div>Task 1</div>
        <div>Task 2</div>
        <div>Task 3</div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return <Page PageContent={Dashboard} />
}

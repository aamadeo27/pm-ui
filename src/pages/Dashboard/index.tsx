import UserPage, { PageContentProps } from '../../components/UserPage'
import CircularProgress from '../../components/Progress'
import TaskList from '../../components/Tasks'
import Weekbar from '../../components/Weekbar'
import { AppRole } from '../../generated/graphql'
import ManagerDashboard from './ManagerDashboard'

function Dashboard({ user }: PageContentProps) {
  if (user.role === AppRole.Admin) return 'Admin Dashboard'
  if (user.role === AppRole.ProjectManager) {
    return <ManagerDashboard user={user} />
  }

  return (
    <div className="py-5 flex flex-col gap-5 w-full h-full">
      <div className="w-full flex flex-row">
        <div className="flex-grow h-32 my-auto">
          <Weekbar />
        </div>
        <div className="flex-none w-fit h-fit px-5">
          <CircularProgress thickness={25} progress={73} radius={60} />
        </div>
      </div>
      <div className="h-full w-full px-5">
        <TaskList />
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return <UserPage PageContent={Dashboard} />
}

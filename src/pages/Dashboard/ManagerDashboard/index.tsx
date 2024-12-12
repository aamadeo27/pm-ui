import { useMemo, useState } from 'react'
import Avatar from '../../../components/Avatar'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Loading from '../../../components/Loading'
import { CurrentUser } from '../../../components/Topbar'
import { GetTeamQuery, useGetTeamQuery, User } from '../../../generated/graphql'
import AddProjectModal from './AddProjectModal'
import Thumbnail from '../../../components/Thumbnail'
import { formatDate } from '../../../utils'
import classNames from 'classnames'

type Props = {
  user: CurrentUser
}
type Project = NonNullable<GetTeamQuery['team']>['projects'][number]

type UserCardProps = {
  user: Pick<User, 'name' | 'avatar_url'>
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex flex-col w-24 gap-2">
      <Avatar user={user} />
      <div className="text-center text-xs">{user.name}</div>
    </div>
  )
}
type ProjectCardProps = {
  project: Project
  team: Map<number, User>
}
function ProjectCard({ project }: ProjectCardProps) {
  const progress =
    project.tasks.reduce((r, t) => (r + t?.completed_at ? 1 : 0), 0) /
    project.tasks.length

  const classes = classNames(
    'flex flex-row gap-5 w-full p-5 rounded-3xl  cursor-pointer',
    'bg-blue-500 text-slate-100 hover:bg-yellow-400 hover:text-slate-600',
  )

  return (
    <div className={classes}>
      <div className="w-fit">
        <Thumbnail object={project} />
      </div>
      <div className="flex-grow my-auto text-xl">{project.name}</div>
      <div className="flex-none my-auto font-light text-sm">
        started {formatDate(new Date(project.created_at))}
      </div>
      <div className="flex-none my-auto font-light text-sm">
        {project.tasks.length} tasks
      </div>
      <div className="flex-none w-10 my-auto text-xl">
        {isNaN(progress) ? 0 : Math.round(progress * 100) / 100}%
      </div>
    </div>
  )
}

export default function ManagerDashboard({ user }: Props) {
  const {
    data: teamData,
    error: teamError,
    loading: teamLoading,
  } = useGetTeamQuery({
    variables: {
      id: user.team_id,
    },
  })
  const [showAddProjectModal, setShowAddProjectModal] = useState(false)

  const teamMap = useMemo(() => {
    const members = new Map<number, User>()

    teamData?.team?.members.forEach((m) => {
      members.set(m.id, m as User)
    })

    return members
  }, [teamData?.team?.members])

  if (teamLoading) return <Loading />
  if (teamError) return teamError.message

  return (
    <div className="flex flex-col gap-5 w-full h-full py-5">
      <div className="flex flex-col rounded-3xl h-48 w-full text-slate-300 p-2 pb-5">
        <Header>Team {teamData?.team?.name}</Header>
        <div className="flex flex-row ">
          {teamData?.team?.members.map((m) => <UserCard key={m.id} user={m} />)}
        </div>
      </div>
      <div className="flex flex-col h-full w-full px-5">
        <div className="flex flex-row">
          <Header>Projects</Header>
          <div className="grid flex-grow w-full justify-items-end">
            <Button
              variant="bare"
              centered={false}
              onClick={() => setShowAddProjectModal(true)}
            >
              Add Project
            </Button>
            {showAddProjectModal && (
              <AddProjectModal onClose={() => setShowAddProjectModal(false)} />
            )}
          </div>
        </div>
        <div className="h-full w-full flex flex-col gap-5">
          {teamData?.team?.projects.map((p) => (
            <ProjectCard key={p.id} project={p} team={teamMap} />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Project Name - start at - Progress - Total Tasks - MemberAvatarsMini
 */

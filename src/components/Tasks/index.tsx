import { formatDate } from '../../utils'
import Header from '../Header'
import CalendarOutline from '../Icons/CalendarOutline'
import CheckCircleIcon from '../Icons/CheckCircle'
import CricleIcon from '../Icons/CircleOutline'

type TaskType = {
  id: number
  name: string
  description: string
  due_to: Date
  completed: boolean
  project: string
}
type TaskCardProps = {
  task: TaskType
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="flex flex-row h-fit w-full py-5">
      <div
        className="min-w-10 w-[3%] my-auto"
        data-testid={`task-${task.id}-${task.completed ? 'completed' : 'pending'}`}
      >
        {task.completed ? (
          <CheckCircleIcon className="stroke-green-500 fill-slate-800 h-7 w-7" />
        ) : (
          <CricleIcon className="stroke-cyan-500 fill-slate-800 h-7 w-7" />
        )}
      </div>
      <div
        className="w-[15%] text-left my-auto overflow-x-hide px-2"
        data-testid={`task-${task.id}-name`}
      >
        {task.name}
      </div>
      <div
        className="w-[60%] text-slate-400 font-light text-sm px-2 my-auto"
        data-testid={`task-${task.id}-description`}
      >
        {task.description}
      </div>

      <div
        className="w-[15%] my-auto px-2"
        data-testid={`task-${task.id}-project`}
      >
        {task.project}
      </div>
      <div
        className="flex-none w-28 my-auto flex flex-row pl-2"
        data-testid={`task-${task.id}-due-to`}
      >
        <CalendarOutline className="h-5.5 w-5.5 mx-2 stroke-white fill-none" />
        <span>{formatDate(task.due_to)}</span>
      </div>
    </div>
  )
}

const LIST_DUMMY: TaskType[] = [
  {
    id: 1,
    name: 'Task 1',
    project: 'Very Long Name for a Project',
    description: 'Get down, get down and move it all around',
    due_to: new Date(),
    completed: true,
  },
  {
    id: 2,
    name: 'Task 2',
    project: 'Project A',
    description: 'Get down, get down and move it all around',
    due_to: new Date(Date.now() + 3600000 * 24),
    completed: false,
  },
  {
    id: 3,
    name: 'Task 3',
    project: 'Project A',
    description: 'Get down, get down and move it all around',
    due_to: new Date(Date.now() + 3600000 * 48),
    completed: false,
  },
]

export default function TaskList() {
  const tasks = LIST_DUMMY.map((t) => <TaskCard key={t.name} task={t} />)
  return (
    <div className="flex flex-col w-full">
      <Header>Tasks</Header>
      <div className="w-full rounded-3xl bg-slate-800 px-5 gap-5 divide-y">
        {tasks}
      </div>
    </div>
  )
}

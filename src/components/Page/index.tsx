import classNames from 'classnames'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'
import { useGetUserQuery, User } from '../../generated/graphql'
import { useNavigate } from 'react-router-dom'

type Props = {
  PageContent: React.FC<{ user: User }>
}

export type PageContentProps = {
  user: User
}

export default function UserPage({ PageContent }: Props) {
  const { data, loading, error } = useGetUserQuery()
  const navigate = useNavigate()

  if (loading) return 'loading ...'

  if (error) return `Error: ${error.message}`

  if (!data?.current_user) {
    navigate('/')
    return null
  }

  return (
    <div
      className={classNames(
        'h-screen w-screen overflow-scroll text-white flex flex-row bg-slate-900',
      )}
    >
      <Sidebar />
      <div className="flex flex-col w-full px-10">
        <Topbar user={data.current_user} />
        <PageContent user={data.current_user} />
      </div>
    </div>
  )
}

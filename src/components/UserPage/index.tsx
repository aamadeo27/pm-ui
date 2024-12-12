import classNames from 'classnames'
import Sidebar from '../Sidebar'
import Topbar, { CurrentUser } from '../Topbar'
import { useGetCurrentUserQuery } from '../../generated/graphql'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading'

export type PageContentProps = {
  user: CurrentUser
}

type Props = {
  PageContent: React.FC<PageContentProps>
}

export default function UserPage({ PageContent }: Props) {
  const { data, loading, error } = useGetCurrentUserQuery()
  const navigate = useNavigate()

  if (loading) return <Loading />

  if (error) {
    if (error.message.match(/Unauthorized access/)) {
      navigate('/')
      return
    }

    return `Error: ${error.message}`
  }

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

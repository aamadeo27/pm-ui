import { useNavigate } from 'react-router-dom'
import IconButton from '../IconButton'
import CalendarOutline from '../Icons/CalendarOutline'
import CalendarSolid from '../Icons/CalendarSolid'
import FolderOutline from '../Icons/FolderOutline'
import FolderSolid from '../Icons/FolderSolid'
import HomeOutline from '../Icons/HomeOutline'
import HomeSolid from '../Icons/HomeSolid'
import UsersOutline from '../Icons/UsersOutline'
import UsersSolid from '../Icons/UsersSolid'

export default function Sidebar() {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-800 h-screen w-28">
      <div className="flex flex-col w-full h-fit gap-12 pt-20">
        <IconButton
          Basic={HomeOutline}
          Hover={HomeSolid}
          onClick={() => navigate('/dashboard')}
          name="home"
        />
        <IconButton
          Basic={FolderOutline}
          Hover={FolderSolid}
          onClick={() => navigate('/projects')}
          name="projects"
        />
        <IconButton
          Basic={CalendarOutline}
          Hover={CalendarSolid}
          onClick={() => navigate('/calendar')}
          name="calendar"
        />
        <IconButton
          Basic={UsersOutline}
          Hover={UsersSolid}
          onClick={() => navigate('/teams')}
          name="teams"
        />
      </div>
    </div>
  )
}

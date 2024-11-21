import { User } from "../../generated/graphql";
import ChevronDown from "../Icons/ChevronDown";
import NotificationsIconOutline from "../Icons/NotificationsOutline";
import NotificationsIconSolid from "../Icons/NotificationsSolid";

type Props = {
  user: User;
};

export default function Topbar({ user }: Props) {
  console.log(user);
  return (
    <div className="h-16 w-full border-b border-slate-800 flex">
      <div className="my-auto h-fit flex flex-row w-full">
        <div className="w-96 flex-none rounded-3xl py-2 px-5 bg-slate-700">
          {" "}
          Search bar
        </div>
        <div className="w-full flex-grow"></div>

        <div
          className="w-12 flex-none my-auto cursor-pointer"
          data-testid="notifications"
        >
          <div className="h-6 w-6 group relative mx-auto">
            <NotificationsIconOutline className="absolute inset-0 w-full h-full group-hover:opacity-0 transition-opacity duration-300" />
            <NotificationsIconSolid className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <div className="w-16 flex-none my-auto cursor-pointer">
          <img
            src="./logo.png"
            alt="avatar"
            className="w-10 h-10 mx-auto"
            data-testid="avatar"
          />
        </div>

        <div className="w-32 flex-none my-auto flex flex-row cursor-pointer">
          <span>My Projects</span>
          <ChevronDown className="w-5 h-5 color-white mx-auto my-auto" />
        </div>
      </div>
    </div>
  );
}

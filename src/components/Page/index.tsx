import classNames from "classnames";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import { useGetUserQuery, User } from "../../generated/graphql";

type Props = {
  PageContent: React.FC<{ user: User }>;
};

export type PageContentProps = {
  user: User;
};

export default function Page({ PageContent }: Props) {
  const { data, loading, error } = useGetUserQuery();

  if (loading) return "loading ...";

  if (error) return `Error: ${error.message}`;

  if (!data?.current_user) return "Error: User not authenticated";

  return (
    <div
      className={classNames(
        "h-screen w-screen overflow-scroll text-white flex flex-row bg-slate-900",
      )}
    >
      <Sidebar />
      <div className="flex flex-col w-full px-10 py-5">
        <Topbar user={data.current_user} />
        <PageContent user={data.current_user} />
      </div>
    </div>
  );
}

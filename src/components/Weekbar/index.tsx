type DayCardProps = {
  day: string
}
function DayCard({ day }: DayCardProps) {
  return (
    <div className="flex flex-col w-full h-fit my-auto py-2">
      <div className="mx-auto text-center">
        <div className="text-xl font-semibold">20 Nov</div>
        <div className="text-xl font-semibold">-</div>
        <div className="text-sm">{day}</div>
      </div>
    </div>
  )
}

export default function Weekbar() {
  return (
    <div className="flex flex-row divide-x h-full p-5">
      <DayCard day="Sunday" />
      <DayCard day="Monday" />
      <DayCard day="Tuesday" />
      <DayCard day="Wedenesday" />
      <DayCard day="Thursday" />
      <DayCard day="Friday" />
      <DayCard day="Saturday" />
    </div>
  )
}

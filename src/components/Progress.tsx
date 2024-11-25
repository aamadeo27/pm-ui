type CircularProgressProps = {
  progress: number
  thickness: number
  radius: number
}

function CircularProgress({
  progress,
  thickness,
  radius,
}: CircularProgressProps) {
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg
      width={radius * 2 + thickness}
      height={radius * 2 + thickness}
      viewBox={`0 0 ${radius * 2 + thickness} ${radius * 2 + thickness}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={radius + thickness / 2}
        cy={radius + thickness / 2}
        r={radius}
        className="stroke-slate-700"
        strokeWidth={thickness}
      />
      <circle
        cx={radius + thickness / 2}
        cy={radius + thickness / 2}
        r={radius}
        className="stroke-cyan-500"
        strokeWidth={thickness}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius + thickness / 2} ${radius + thickness / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="text-4xl fill-white"
      >
        {progress}%
      </text>
    </svg>
  )
}
export default CircularProgress

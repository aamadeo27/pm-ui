type Props = {
  className?: string
}

export default function NotificationsIconSolid({ className }: Props) {
  return (
    <svg
      width="48"
      height="47"
      viewBox="0 0 48 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.8933 2.05078C14.5978 2.05078 6.92461 9.42864 6.92461 18.5945V25.2163L3.76506 30.0135C1.13137 33.8774 3.8745 38.7385 8.41966 38.7385H39.585C41.8043 38.7385 43.6028 37.4166 44.5184 35.7532C45.4401 34.0788 45.5835 31.8289 44.2024 29.9599L40.8621 25.1865V18.5945C40.8621 14.0315 38.8948 9.7251 35.918 6.8325C35.8996 6.81459 35.8808 6.79706 35.8617 6.7799C32.7282 3.96917 28.5779 2.05078 23.8933 2.05078ZM18.1924 40.6694C17.126 40.6694 16.2615 41.5339 16.2615 42.6003C16.2615 43.6668 17.126 44.5313 18.1924 44.5313H29.778C30.8444 44.5313 31.7089 43.6668 31.7089 42.6003C31.7089 41.5339 30.8444 40.6694 29.778 40.6694H18.1924Z"
        fill="white"
      />
    </svg>
  )
}

export const formatDateToLongString = (dateString: string) => {
  const date = new Date(dateString)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const

  return new Intl.DateTimeFormat('en-US', options).format(date)
}

export const calculateTimeAgo = (dateString: string) => {
  const millisecondsAgo = new Date().getTime() - new Date(dateString).getTime()
  const secondsAgo = millisecondsAgo / 1000

  switch (true) {
    case secondsAgo < 60:
      return `Just now`
    case secondsAgo < 60 * 60:
      return `${Math.floor(secondsAgo / 60)} minutes ago`
    case secondsAgo < 60 * 60 * 24:
      return `${Math.floor(secondsAgo / 60 / 60)} hours ago`
    case secondsAgo < 60 * 60 * 24 * 7:
      return `${Math.floor(secondsAgo / 60 / 60 / 24)} days ago`
    case secondsAgo < 60 * 60 * 24 * 7 * 4:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 7)} weeks ago`
    case secondsAgo < 60 * 60 * 24 * 30:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 30)} months ago`
    case secondsAgo < 60 * 60 * 24 * 365:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 365)} years ago`
    default:
      return `${Math.floor(secondsAgo / 60 / 60 / 24 / 365)} years ago`
  }
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

export function formatDate(dateString: string): string {
  const currentDate: Date = new Date()
  const postDate: Date = new Date(dateString)

  const timeDifferenceInSeconds: number = Math.floor(
    (currentDate.getTime() - postDate.getTime()) / 1000
  )

  const secondsInMinute: number = 60
  const secondsInHour: number = 60 * secondsInMinute
  const secondsInDay: number = 24 * secondsInHour
  const secondsInMonth: number = 30 * secondsInDay
  const secondsInYear: number = 365 * secondsInDay

  if (timeDifferenceInSeconds < secondsInMinute) {
    return `${timeDifferenceInSeconds} seconds ago`
  } else if (timeDifferenceInSeconds < secondsInHour) {
    const minutesAgo: number = Math.floor(
      timeDifferenceInSeconds / secondsInMinute
    )
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`
  } else if (timeDifferenceInSeconds < secondsInDay) {
    const hoursAgo: number = Math.floor(timeDifferenceInSeconds / secondsInHour)
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`
  } else if (timeDifferenceInSeconds < secondsInMonth) {
    const daysAgo: number = Math.floor(timeDifferenceInSeconds / secondsInDay)
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`
  } else if (timeDifferenceInSeconds < secondsInYear) {
    const monthsAgo: number = Math.floor(
      timeDifferenceInSeconds / secondsInMonth
    )
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`
  } else {
    const yearsAgo: number = Math.floor(timeDifferenceInSeconds / secondsInYear)
    return `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`
  }
}

//
export const multiFormatDateString = (timestamp: string = ""): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000)
  const date: Date = new Date(timestampNum * 1000)
  const now: Date = new Date()

  const diff: number = now.getTime() - date.getTime()
  const diffInSeconds: number = diff / 1000
  const diffInMinutes: number = diffInSeconds / 60
  const diffInHours: number = diffInMinutes / 60
  const diffInDays: number = diffInHours / 24

  switch (true) {
    case Math.floor(diffInDays) >= 30:
      return formatDate(timestamp)
    case Math.floor(diffInDays) === 1:
      return `${Math.floor(diffInDays)} day ago`
    case Math.floor(diffInDays) > 1 && diffInDays < 30:
      return `${Math.floor(diffInDays)} days ago`
    case Math.floor(diffInHours) >= 1:
      return `${Math.floor(diffInHours)} hours ago`
    case Math.floor(diffInMinutes) >= 1:
      return `${Math.floor(diffInMinutes)} minutes ago`
    default:
      return "Just now"
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId)
}

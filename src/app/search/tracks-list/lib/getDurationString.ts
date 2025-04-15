export const getDurationString = (duration: number): string => {
  const minutes = Math.round(duration / 60)
  const seconds = duration % 60
  return `${minutes}:${seconds}`
}
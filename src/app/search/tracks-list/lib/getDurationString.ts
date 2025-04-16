export const getDurationString = (duration: number): string => {
  const minutes = Math.round(duration / 60)
  let seconds: string = (duration % 60).toString()
  
  if (seconds.length === 1){
    seconds = '0' + seconds
  }
  
  return `${minutes}:${seconds}`
}
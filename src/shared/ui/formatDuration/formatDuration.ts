export const formatDuration = (durationInSeconds: number): string => {
  let minutes = Math.trunc(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;

  if (minutes >= 60) {
    const hours = Math.trunc(minutes / 60);
    minutes = minutes % 60;
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  } 

  return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
};

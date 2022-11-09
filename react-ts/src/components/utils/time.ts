/**
 * @export
 * @description function to parse the date in format 00:00:00 to seconds
 * @param date in format 00:00:00
 * @returns { number }
 * @version 1.0.0
 */
export function parseTimeToSeconds(date: TimeToParse): number {
  const [hour, min, sec] = date.split(':');

  const hourInSeconds = Number(hour) * 3600;
  const minInSeconds = Number(min) * 60;

  return hourInSeconds + minInSeconds + Number(sec)
}
import { format, parseISO } from 'date-fns';
import utcToZonedTime from 'date-fns-tz/utcToZonedTime';

export function isoStringToJstDate(isoString: string): string {
  const utcDate = parseISO(isoString);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');

  return format(jstDate, 'yyyy-MM-dd');
}

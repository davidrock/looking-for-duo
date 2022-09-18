export default function convertHourStringToMinutes(hourString: String) {
  const [hours, minutes] = hourString.split(':').map(Number);

  const minutesAmmout = hours * 60 + minutes;
  return minutesAmmout;
}

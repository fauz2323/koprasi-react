export default class FormatHelper {
  static format(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  }

  static formatDate(formatDate) {
    const parsedDate = new Date(formatDate);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC", // Adjust the timeZone based on your requirements
    }).format(parsedDate);
  }
}

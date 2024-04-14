export default function getFormattedDate(dateString: string): string {
  // if (dateString)
  return new Intl.DateTimeFormat("en-PK", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}

export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-PK", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}

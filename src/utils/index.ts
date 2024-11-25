const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
})

export function formatDate(d: Date) {
  return dateTimeFormat.format(d).replace(/,/, '')
}

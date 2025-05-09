const mmddyyyy = (dateString: string): string => {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }

  return date.toLocaleDateString('en-US', options)
}
export default mmddyyyy
